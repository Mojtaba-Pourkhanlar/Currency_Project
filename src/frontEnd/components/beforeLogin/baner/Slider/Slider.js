import { useContext } from "react";
import AliceCarousel from "react-alice-carousel";
import { CoinsList } from "frontEnd/context/Coins";
import Card from "./Card";
import "react-alice-carousel/lib/alice-carousel.css";
import { Box } from "@mui/material";


const responsive = {
  0: {
    items: 2,
  },
  600: {
    items: 4,
  },
};

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const Gallery = () => {
  const { coins } = useContext(CoinsList);
  const listCopy = coins;
  const editList = listCopy.slice(0, 5);

  return (
    <Box
      component="div"
      sx={{ height: "50%", display: "flex", alignItems: "center" }}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={editList.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.symbol.toUpperCase()}
            price={item.price_change_percentage_24h.toFixed(2)}
            market={numberWithCommas(item.current_price.toFixed(2))}
          />
        ))}
        autoPlay
      />
    </Box>
  );
};

export default Gallery;
