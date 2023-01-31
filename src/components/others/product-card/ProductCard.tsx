import Typography from "@mui/material/Typography";
import { FC, memo } from "react";
import Link from "next/link";
import { ImgBtn, ImgSrc, Img, ImgBackdrop, ImgMarked } from "./u_productCard";
import Box from "@mui/material/Box";

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { url, title, description } = product;

  return (
    <Link
      href="/about"
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      <ImgBtn focusRipple>
        <ImgSrc style={{ backgroundImage: `url(${url})` }} />
        <ImgBackdrop className="MuiImageBackdrop-root" />

        <Img>
          <Typography
            component="p"
            color="inherit"
            className="title"
            sx={{
              position: "relative",
              fontSize: (theme) => theme.spacing(3),
              px: 2,
            }}
          >
            {title}
            <ImgMarked className="MuiImageMarked-root" />
          </Typography>
        </Img>
        {!!description && (
          <Box
            component="aside"
            sx={{
              position: "absolute",
              bottom: "0",

              p: 2,
              width: "100%",
              backgroundColor: "primary.dark",
              color: "primary.light",
            }}
          >
            <Box>
              <Typography
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  opacity: 1,
                }}
              >
                Description:{" "}
                <Typography
                  sx={{
                    display: "inline",
                  }}
                >
                  {description}
                </Typography>
              </Typography>
            </Box>
          </Box>
        )}
      </ImgBtn>
    </Link>
  );
};

interface ProductCardProps {
  product: { url: string; title: string; description?: string; name?: string };
}
export default memo(ProductCard);
