import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import react from "../../../../../../assets/images/skill/react.svg";
import js from "../../../../../../assets/images/skill/js.svg";
import next from "../../../../../../assets/images/skill/next.svg";
import mui from "../../../../../../assets/images/skill/mui.svg";
import html from "../../../../../../assets/images/skill/html.svg";
import css from "../../../../../../assets/images/skill/css.svg";
import bootstrap from "../../../../../../assets/images/skill/bootstrap.svg";
import git from "../../../../../../assets/images/skill/git.svg";
import graphql from "../../../../../../assets/images/skill/graphql.svg";
import scss from "../../../../../../assets/images/skill/scss.svg";
import redux from "../../../../../../assets/images/skill/redux.svg";
import github from "../../../../../../assets/images/skill/github.svg";
import linkedin from "../../../../../../assets/images/skill/linkedin.svg";

import { Header } from "../Header";
import { ReadMoreLess } from "../../../../../../helpers";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const ItemGrid = ({ title, images }) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "transparent",
        transition: "all 0.50s linear",
        flexDirection: "column",
        my: "1px",
      }}>
      <CardMedia
        component="img"
        sx={{ width: 100, mt: "20px" }}
        image={images}
        alt={title}
      />
      <Box>
        <CardContent>{title}</CardContent>
      </Box>
    </Card>
  );
};

export const AboutTab = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const leftRight = {
    textAlign: `${i18n.language === "en" ? "left" : "right"}`,
  };

  return (
    <>
      <Header title={t("mojtaba")} subtitle={t("mojtabaDec")} />

      <>
        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="space-between">
          <Grid
            item
            xs={12}
            lg={6}
            align="center"
            sx={{ display: { xs: "block", lg: "none" } }}>
            <img
              style={{ borderRadius: "15px 70px" }}
              src={require("../../../../../../assets/images/gallery/01.JPG")}
              alt="imageMe"
              width="350px"
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <Typography
              variant="h6"
              align="justify"
              sx={{ lineHeight: "34px" }}>
              {i18n.language === "fa" ? (
                <ReadMoreLess limit={335}>
                  خب بزار همین اول موضوع رو روشن بکنم، من از رشته ای غیر از
                  کامپیوتر وارد این حوزه شدم.اواخر سال 1397 بود که کارشناسی
                  تربیت بدنی رو گرفتم و مثل خیلی از بچه های این حوزه شوق فعالیت
                  در حوزه های مربیگری رو داشتم اما یک مشکل وجود داشت اونم این
                  بود که خدمت نرفته بودم. نا گفته نماند که یه مدتی کمک مربی کار
                  کردم تا همه چی اوکی باشه بعد خدمت. خب آقا ما اول شهریور 1398
                  رفتیم خدمت، به به... نمیخوام بگم زدم زیر گوش سرهنگ .همه چی
                  داشت باب میل پیش میرفت که یهویی بووووم کرونا اومد اولش زیاد
                  جدیش نگرفته بودم گفتم که موندگار نیست، اما قافل بودم. خلاصه ما
                  خدمتو با 4 ماه کسری در دی ماهه 1399 تموم کردیم اومدیم دیدیم که
                  ای بابا همه جا بستس که چیکار کنم الان، درو دیوار های خونه داشت
                  رو سرم خراب میشد به کنار نگاه های معنا دار هم بهش اضافه شد از
                  طرفی چون موقعیت مالیم خوب نبود نمیتونستم ریسک کنم و باشگاهو
                  باز کنم چون باید هزینه میکردم و اگر باشگاه بسته میشد کار سخت
                  تر میشد برای منه تازه کار اما یه روز پسر عموم اومد گفت چرا
                  نمیای برنامه نویسی گفتم حاجی چیزی میزنی منه مربی رو چه به
                  برنامه نویسی گفت حالا یه نگاهی بنداز اگه خوشت نیومد شروع نکن
                  خب، دیدم بدم نمیگه هاا. خلاصه ما شروع کردیم با دیدن دوره
                  مقدماتی چه زبانی به به سی شارپ !!!! میدونم خندیدی خودمم خندم
                  گرفته. اقا ما یکمی پیش رفتیم دیدیم نه اصلا هیچی حالیمون نمیشه
                  (البته ناگفته نماند برای این که سیستم بهتر بخرم که برنامه
                  نویسی رو شروع کنم یه 4 ماهی رو رفتم شغل شریف سنگ کاری که رک
                  بگم پاره شدم.) بگذریم سیستمو خریدم و داشتم دوره نچسب سی شارپو
                  ادامه میدام که به مشکلی خوردم و به پسرعموم زنگ زدم گفتم، گفت
                  که واقعا میخوای ادامه بدی !؟ گفتم چطور؟ گفت 6 ماه شد تازه
                  مقدماتی رو تموم کردی و.... داستانو براش تعریف کردم و در اخر
                  گفتم که راسیتش اصلا با سی شارپ حال نمیکنم گفت که پس بیا سمت
                  حوزه فرانت و... برام توضیح داد. اواسط شهریور 1400 دیگه استارت
                  سنگینی با شروع دوره html/css زدمو دیدم چقدر باحاله خلاصه خیلی
                  حال کردم و با اشتیاق ادامه دادم و... بعد 6 ماه وارد یه شرکتی
                  در حوزه رمز و ارز شدم که به صورت پروژه محور بود. اینارو گفتم
                  که بگم که... مجتبی پورخانلر هستم به مدت یک ساله وارد برنامه
                  نویسی شدم و در حوزه فرانت اند فعالیت میکنم. این سایتم برای
                  تمرین کردن طراحی کردم و آهسته آهسته بهش فیچرهای جدیدی رو اضافه
                  میکنم. میدونم خیلی پر حرفی کردم معذرت.
                </ReadMoreLess>
              ) : (
                <ReadMoreLess limit={335}>
                  Well, let me clarify the matter first, I entered this field
                  from a field other than computers. It was at the end of 2018
                  that I got a bachelor's degree in physical education and like
                  many children in this field, I was eager to work in coaching
                  fields, but there was a problem. It was that I had not served.
                  It goes without saying that I worked as an assistant coach for
                  a while so that everything would be okay after the service.
                  Well, sir, we went to the service on the first of September
                  2018. I don't want to say that I was under the colonel's ear.
                  At first, I didn't take it too seriously, I said that it won't
                  last, but I was convinced. In short, we finished the service
                  with a deficit of 4 months in December 2019. We came to see
                  that you are closed everywhere, what should I do now, the
                  walls of the house were falling apart on my head, besides the
                  meaningful looks, it was also added to our financial
                  situation. It wasn't good, I couldn't take a risk and open the
                  club because I had to spend money and if the club was closed,
                  it would be more difficult for me as a newbie. But one day the
                  public boy came and said why don't you come to programming, I
                  said, Haji, you are doing something, but what did the coach
                  say about programming, now take a look, if you don't like it,
                  don't start. In s hort, we started by looking at the
                  introductory course of what language to C#!!!! I know you
                  laughed, I laughed myself. Sir, we went a little further and
                  saw that nothing is going to happen to us at all (of course,
                  it goes without saying that in order to buy a better system to
                  start programming, I went to Sharif's job as a stonemason for
                  4 months, to be honest, I was broke.) By the way, I bought the
                  system and was continuing the non-sticky C Sharp course when I
                  ran into a problem and called my cousin. He said do you really
                  want to continue? I said how? He said it's been 6 months, you
                  just finished the preliminary and.... I told him the story and
                  in the end I told him that I don't like C# at all, he said
                  come to the front area and... he explained to me. In the
                  middle of September 2022, I made a heavy start with the start
                  of the html/css course. I saw how cool it was. In short, I had
                  a lot of fun and continued with enthusiasm. After 6 months, I
                  entered a company in the field of cryptocurrency, which was
                  project-oriented. I said this to say that... My name is
                  Mojtaba Pourkhanler. I started programming for a year and I
                  work in the field of front end. I designed this site for
                  practice and I will slowly add new features to it. I know I
                  spoke too much, sorry.
                </ReadMoreLess>
              )}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            lg={6}
            align="center"
            mb={5}
            ml={1}
            sx={{ display: { xs: "none", lg: "block" }, m: "0 auto" }}>
            <img
              style={{ borderRadius: "15px 200px" }}
              src={require("../../../../../../assets/images/gallery/01.JPG")}
              width="400px"
              alt="imageMe"
            />
          </Grid>
        </Grid>
      </>

      <>
        <Typography variant="h3" mb="20px" sx={leftRight}>
          {t("skils")}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <ItemGrid title="Reactjs" images={react} />
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={2}>
            <ItemGrid title="Nextjs" images={next} />
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={2}>
            <ItemGrid title="JavaScript" images={js} />
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={2}>
            <ItemGrid title="Git" images={git} />
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={2}>
            <ItemGrid title="Redux" images={redux} />
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={2}>
            <ItemGrid title="GraphQL" images={graphql} />
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={2}>
            <ItemGrid title="Material ui" images={mui} />
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={2}>
            <ItemGrid title="Sass" images={scss} />
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={2}>
            <ItemGrid title="Bootstrap" images={bootstrap} />
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={2}>
            <ItemGrid title="HTML" images={html} />
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={2}>
            <ItemGrid title="CSS" images={css} />
          </Grid>
        </Grid>
      </>

      <>
        <Typography variant="h3" my="50px" sx={leftRight}>
          {t("contactMe")}
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <a href="https://github.com/Mojtaba-Pourkhanlar">
              <img width="150px" src={github} alt="github.com" />
            </a>
            <Typography variant="h5" my={3}>
              {t("github")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <a href="https://www.linkedin.com/in/mojtaba-pourkhanlar-778370251">
              <img width="150px" src={linkedin} alt="www.linkedin.com" />
            </a>
            <Typography variant="h5" my={3}>
              {t("linkdin")}
            </Typography>
          </Grid>
        </Grid>
      </>
    </>
  );
};
