import { PageBanner } from "../../components/PageBanner";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import { Description } from "../../components/Description";
import { Title } from "../../components/Title";
import { CategoriesSection } from "../../components/CategoriesSection";
import { CenteredContainer } from "../../components/CenteredContainer";
import { ContactForm } from "../../components/ContactForm";
import grainPageBanner from "../../assets/images/banners/grainPageBanner.png";
import wheatImage from "../../assets/images/categories/wheat.png";
import sunflowerImage from "../../assets/images/categories/wheat.png";
import cornImage from "../../assets/images/categories/wheat.png";
import barleyImage from "../../assets/images/categories/wheat.png";

export const Grain = () => {
  return (
    <>
      <Header />
      <PageBanner title="Grain" background={grainPageBanner} />
      <Container>
        <Description
          value="Our company specializes in the wholesale trade of grain and grain products. We represent the best producers of grain and grain products in various countries of the world.<br /><br />The supply of grains and oilseeds is carried out by the company around the world, both directly and through the world's largest traders. Purchase of grain is carried out in all regions of Europe and Ukraine."
          margin="40px 0 0 0 "
        />
        <Title value="Categories" margin="80px 0 40px" />
        <CategoriesSection
          categories={[
            {
              id: 2,
              title: "Wheat",
              description:
                "Wheat is rightfully considered one of the most valuable and demanded crops in the World. It is not surprising - in addition to a large number of nutrients (gluten, protein, calcium, phosphorus, magnesium, potassium) that wheat contains, it is the primary raw material in the manufacturing of various food products. The most common is a flour production using waste materials, for animal feed.",
              image: wheatImage,
              background: "green",
            },
            {
              id: 3,
              title: "Sunflower",
              description:
                "Sunflower can be safely called the main oilseed crop of our country. The rich lands accept sunflower seeds well, allowing domestic farmers to collect good harvests, selling them both within the country and far beyond its borders.It is not surprising that the demand for sunflower seeds is growing every year, because the high profitability of this crop attracts businessmen who are engaged in the cultivation and sale of sunflower seeds.",
              image: sunflowerImage,
              background: "green",
            },
            {
              id: 4,
              title: "Corn",
              description:
                "Corn is one of the most common crops in the world. In terms of popularity, this seed can be safely placed on a par with sunflower and wheat. What is the reason for this? First of all, the wide applicability of this culture, as well as in addition to its use within the country, the sowing culture is massively exported, providing our farmers with a good income.",
              image: cornImage,
              background: "green",
            },
            {
              id: 5,
              title: "Barley",
              description:
                "Barley is a crop widely used in our country. It can be used both in the food sector and in agriculture, as feed for livestock. In addition, spring barley seeds are used in brewing, which makes this crop even more attractive.In the food sector, grain is used for the manufacture of cereals (barley and pearl barley), as well as for coffee drinks.",
              image: barleyImage,
              background: "green",
            },
          ]}
        />
        <CenteredContainer>
          <Description
            value="Experienced professionals are always happy to offer you competitive prices for your products. We invite producers of grain products of all forms of ownership to business cooperation."
            margin="80px 0 40px"
            fontSize="27px"
          />
          <Title value="THE COMPANY OFFERS HIGH QUALITY SUNFLOWER OIL" />
        </CenteredContainer>
        <ContactForm title="Do you have any questions?" description="Write to us and our manager will help you" />
      </Container>
    </>
  );
};
