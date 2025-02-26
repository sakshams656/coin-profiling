/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import AssetsImg from "@public/images";
import Image from "next/image";
import { coinInfoContainer, contentArea, contentBody, contentHeader, dataContainer, getTabStyle, launchInfo, leftSidebar, title } from "./styles";

const CoinInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState("How BTC works");

  const tabContent = {
    "About BTC": "This section provides an overview of Bitcoin (BTC), its history, and its significance as the first cryptocurrency. Bitcoin was created by an anonymous entity known as Satoshi Nakamoto and introduced in 2009 as a decentralized digital currency. Bitcoin operates on a decentralized network, using blockchain technology to ensure security and transparency without a central authority.",
    "How BTC works": `Since the entire system is decentralised, Bitcoin does not represent any physical assets and allows high transparency to its users, as it's on a public ledger. Users can freely view balances in real-time and keep track of any fluctuation in the crypto asset value. An assemblage of computers made up of 'miner' or 'nodes' work in combination to run Bitcoin's code and store its blockchain. It is created and verified by a process called 'mining', which comprises large permutations and combinations of computing power. Bitcoin is referred to as 'BTC' on trading platforms, and all other crypto assets are collectively described as 'altcoins' owing to being adherents to Bitcoin as their predecessor. Bitcoins are highly secure as the tokens are maintained using 'keys' which can be public or private. It is almost impossible for human intervention to hack or recreate the same as it is built using a long string of alphanumeric digits. These digits are encrypted mathematics created by an algorithm.`,
    "How to buy BTC": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quaerat corporis velit fugit suscipit, dignissimos accusantium reiciendis. Quis laboriosam magnam maiores at sequi a eaque consequuntur facere, similique molestiae alias, illo nesciunt dolore voluptas cupiditate velit debitis, aperiam animi distinctio quas quaerat. Reiciendis, illum itaque veniam aliquam architecto quibusdam quo omnis alias officia saepe enim unde officiis similique consequatur possimus eius doloribus repellendus optio natus quidem, numquam animi et id! Quaerat, ipsa voluptate, sapiente recusandae consectetur ea soluta consequuntur fuga expedita ullam eum alias nemo tempora sunt, saepe accusantium ex veritatis? Iste incidunt aliquid blanditiis esse eum! Praesentium magnam voluptates voluptatem possimus, ipsa laborum alias aspernatur quos, dolorum veniam sunt iusto rem, officia recusandae omnis earum maiores nulla animi dicta voluptate ab? Laudantium repudiandae facere provident asperiores consectetur ab alias eligendi porro pariatur sequi rerum ad soluta enim totam harum aliquid mollitia ipsa expedita tempore doloremque dolorem sint reprehenderit, nam quidem? Vel, aspernatur. Repellat eum iusto ab quo porro tempora quasi aliquid modi animi numquam provident, labore ad dignissimos. Labore nam aperiam cumque, omnis quisquam sequi maxime libero quam quos quis inventore deleniti quidem tempora dicta corrupti exercitationem voluptas! Recusandae, fugit at ad nisi voluptatem commodi velit, impedit, illum deleniti rem sit itaque in. Commodi voluptates cumque, earum ut rerum distinctio rem odit libero harum animi debitis et quas quis accusantium dolor laborum minima eius est? Maiores doloribus aut est tempore odio odit, temporibus, voluptate accusantium quas ipsa recusandae architecto, rem provident in quod excepturi amet autem commodi unde voluptas neque delectus! Dolor odio dolore ad ex tenetur. Labore blanditiis earum dolor sequi, corporis quam rem suscipit ex tenetur molestias officia ad, nesciunt reprehenderit? Facilis similique minus doloremque harum error nostrum commodi molestiae, eum quasi nam possimus vero dolor aspernatur laboriosam ducimus quaerat rem dolores maiores, optio provident assumenda tenetur? Nam unde quaerat sit, aspernatur ex minima molestiae dolorem iusto nisi, dolores, fugit repudiandae veritatis animi ullam quas libero? Nam, voluptatem ipsa culpa consectetur labore temporibus atque ratione consequuntur inventore explicabo omnis ad doloremque tenetur tempore cupiditate quisquam cum at facilis impedit consequatur. Facere porro mollitia deserunt delectus doloribus eum dolores, omnis eos doloremque? Quam quasi reprehenderit culpa, facere sed animi corrupti. Voluptate quo impedit cupiditate suscipit molestiae minus pariatur aliquam nisi. Doloremque labore dolores inventore quis! Nesciunt officia, libero placeat cum maiores, facilis at recusandae aliquam eos deserunt dolore dignissimos facere? Reprehenderit ipsa autem accusamus repellat nam doloribus aliquid tenetur ea, corrupti, dignissimos ad ab earum aspernatur minima et! Accusantium perspiciatis consequuntur error libero impedit. Sunt recusandae exercitationem maiores neque dolor labore eum velit dolores maxime tempora nobis officia quod repudiandae dolore unde earum, esse ut deserunt suscipit possimus dolorem doloremque! Doloribus a nobis explicabo nam inventore pariatur eaque, voluptas dolor ab consequuntur sapiente cum blanditiis repudiandae illum nemo! Veritatis iste ducimus odit et molestiae ipsa veniam. Magni veritatis possimus dolorem. Ipsum esse nostrum enim, qui quaerat minima iste explicabo possimus, nobis fugit illo saepe omnis? Ipsam, est velit incidunt porro ipsa architecto illo accusamus optio, aut, labore soluta. Ea modi eius et blanditiis, itaque, consequuntur laboriosam neque voluptas praesentium facere voluptate mollitia dolore odit enim ab ad dolorem quibusdam sapiente dolores soluta magni cumque? Enim minima animi, vitae vel similique omnis voluptatum porro facere reiciendis quae fuga sed delectus atque modi in magni sunt odio. Laboriosam amet in praesentium nisi qui suscipit molestiae culpa, neque consequuntur quidem ipsa iste, provident velit nesciunt eveniet! Eaque voluptatem repellat necessitatibus tempore repellendus ad corporis sint error provident odit facilis eius eum ipsam aperiam quibusdam, culpa itaque nisi in excepturi? Repellat voluptatum ad numquam aliquid temporibus mollitia expedita doloribus, natus eos illum aperiam quis a ipsum fuga, aliquam dolorem! Quisquam ducimus amet nostrum qui soluta magnam provident assumenda autem possimus mollitia porro quidem nobis quis ipsa maiores quas dolore temporibus dolorem, tempore, at cupiditate. Iusto eius vero culpa adipisci laboriosam velit illum, blanditiis id obcaecati suscipit consequatur ut reprehenderit provident fuga. Explicabo reprehenderit, necessitatibus in voluptate earum eos nemo corrupti alias dolorum repudiandae temporibus impedit hic placeat corporis doloribus voluptatum cum cumque repellat animi ullam. Voluptas amet, voluptatibus possimus temporibus commodi provident exercitationem, suscipit molestias quam minus ratione iure. Veritatis molestias deserunt voluptatem cumque molestiae ipsum repellendus, tempora hic illo magni similique amet impedit praesentium iste ipsa quidem minima culpa recusandae aut veniam iusto assumenda magnam! Sunt ullam explicabo enim maiores similique repellat obcaecati fuga culpa molestias omnis minus maxime officiis ipsam possimus necessitatibus nulla, nemo voluptatum animi officia facilis? Eum et odit sed quae quam ut soluta odio in excepturi culpa at corporis consequatur voluptatum, necessitatibus, quis totam nemo natus placeat ullam, delectus temporibus expedita dolore. Consectetur, dignissimos. Vitae sed a ex voluptate provident? Necessitatibus dignissimos magni voluptates aliquid explicabo, sunt, hic autem inventore officia praesentium perspiciatis beatae ipsam quis quia cupiditate enim, dolor sint porro. Debitis illo amet alias in qui optio enim cumque fugiat molestias quae pariatur corrupti facere nam illum eius voluptate voluptatibus voluptatem blanditiis incidunt reiciendis, labore repudiandae quas. Nesciunt inventore, labore dignissimos aperiam sapiente asperiores reprehenderit repudiandae voluptatibus! Eligendi at, labore beatae possimus quia in vel. Delectus dolores itaque nesciunt, fugit, dolor illo possimus obcaecati repellendus tempora nisi saepe cumque, excepturi sed architecto tenetur fuga expedita! Dolor impedit cumque ea, nesciunt exercitationem, labore odit libero suscipit fugit ut, reiciendis temporibus cupiditate. At aliquid sunt, deserunt excepturi ipsa incidunt odio debitis nobis vel modi quas nemo voluptatem delectus reprehenderit obcaecati alias accusamus quo quis nam cumque ducimus non totam. Ratione perferendis soluta numquam repellat quo eos velit laboriosam? Nisi laudantium quisquam repudiandae modi, explicabo ab? Voluptatum, earum! Corrupti omnis dolorum, beatae quibusdam a error sapiente. Deserunt, doloribus aut quaerat adipisci iusto repellat. Molestias porro earum ratione quaerat harum asperiores voluptates labore tempore repellat sed adipisci veniam, consequatur hic quidem ducimus accusamus quos corporis doloribus ullam ut vel ex. Eum consectetur doloremque omnis nam optio beatae, at quo. Aliquam impedit, expedita sit nihil quia quidem quo dolorem explicabo? Rerum sed nobis nisi adipisci corporis doloremque labore quos voluptatem, ipsa necessitatibus fugit deleniti quod totam atque, in rem provident.",
    "Why to buy BTC": "Discover the reasons to invest in Bitcoin, including its potential as a store of value, hedge against inflation, and its growing acceptance as a mainstream financial asset. Bitcoin’s limited supply (21 million coins) and decentralized nature make it attractive for investors seeking diversification and protection against economic uncertainty.",
  };

  return (
    <div css={coinInfoContainer}>
      <span css={title}>Coin Information</span>
      <span css={launchInfo}>Launched : Jan 2009</span>
      <div css={dataContainer}>
        <div css={leftSidebar}>
          <button
            css={getTabStyle(activeTab === "About BTC")}
            onClick={() => setActiveTab("About BTC")}
          >
            <Image src={AssetsImg.ic_document} alt="About BTC" width={16} height={16} />
            <span>About BTC</span>
          </button>
          <button
            css={getTabStyle(activeTab === "How BTC works")}
            onClick={() => setActiveTab("How BTC works")}
          >
            <Image src={AssetsImg.ic_settings} alt="How BTC works" width={16} height={16} />
            <span>How BTC works</span>
          </button>
          <button
            css={getTabStyle(activeTab === "How to buy BTC")}
            onClick={() => setActiveTab("How to buy BTC")}
          >
            <Image src={AssetsImg.ic_wallet} alt="How to buy BTC" width={16} height={16} />
            <span>How to buy BTC</span>
          </button>
          <button
            css={getTabStyle(activeTab === "Why to buy BTC")}
            onClick={() => setActiveTab("Why to buy BTC")}
          >
            <Image src={AssetsImg.ic_shield} alt="Why to buy BTC" width={16} height={16} />
            <span>Why to buy BTC</span>
          </button>
        </div>
        <div css={contentArea}>
          <div css={contentHeader}>
            {activeTab.replace("BTC", "").trim()} 
          </div>
          <div css={contentBody}>
            <p>{tabContent[activeTab]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;