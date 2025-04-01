import React, { useState, useEffect, useRef } from "react";
import ArticleCard from "../ArticleCard";

const VirtualList = ({ 
  list = [], 
  height = 500, 
  width = "100%", 
  articleHeight = 150, 
  articleWidth = 300,
  itemsPerRow = 3,
  buffer = 6 
}) => {
  const containerRef = useRef(null);
  

  const rowHeight = articleHeight;
  const totalRows = Math.ceil(list.length / itemsPerRow);
  const totalHeight = totalRows * rowHeight;
  

  const [visibleRange, setVisibleRange] = useState({
    startRow: 0,
    endRow: Math.ceil(height / rowHeight) + 0
  });
  
  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const { scrollTop } = containerRef.current;
    const startRow = Math.floor(scrollTop / rowHeight);
    const visibleRows = Math.ceil(height / rowHeight);
    const bufferRows = 0; 
    
    const endRow = Math.min(startRow + visibleRows + bufferRows, totalRows);
    
    setVisibleRange({
      startRow: Math.max(0, startRow - bufferRows),
      endRow
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [list.length, height, rowHeight]);
  

  const startIndex = visibleRange.startRow * itemsPerRow;
  const endIndex = Math.min(visibleRange.endRow * itemsPerRow, list.length);
  const visibleItems = list.slice(startIndex, endIndex);
  

  const topOffset = visibleRange.startRow * rowHeight;
  
  return (
    <div
      ref={containerRef}
      style={{
        height,
        width,
        overflowY: "auto",
        position: "relative"
      }}
    >

      <div style={{ height: totalHeight, position: "relative" }}>

        <div
          style={{
            position: "absolute",
            top: topOffset,
            left: 0,
            right: 0,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {visibleItems.map((article, index) => (
            <div
              key={startIndex + index}
              style={{
                width: "30%",
                height: articleHeight,
                padding: "10px",
                boxSizing: "border-box"
              }}
            >
              <ArticleCard
                key={startIndex + index}
                title={article.title}
                link={article.url}
                imageUrl={article.urlToImage}
                date={
                  !isNaN(Date.parse(article.publishedAt))
                    ? new Date(article.publishedAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "Unknown Date"
                }
                totalViews={article.totalViews || "0"}
                category={article.category || "Unknown"}
                description={article.content}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualList;