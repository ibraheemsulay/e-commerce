import Head from "next/head";
import { incremented } from "../store/features/counter/counter-slice";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import Box from "@mui/material/Box";

export default function Home() {
  const counter = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Welcome to next.js</div>
      <Box bgcolor="primary.main">
        {counter}
        <button onClick={() => dispatch(incremented())}> increase</button>
      </Box>
    </>
  );
}
