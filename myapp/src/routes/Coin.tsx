import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface RouteParams {
  coinId: string;
}

interface LocationParams {
  state: {
    name: string;
  };
}

// interface ITag {
//   coin_counter: number;
//   ico_counter: number;
//   id: string;
//   name: string;
// }

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  //   tags: ITag[];
  //   team: object;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  //   links: object;
  //   links_extended: object;
  //   whitepaper: object;
  first_data_at: string;
  last_data_at: string;
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const { state } = useLocation() as LocationParams;
  //   console.log(state.name);
  const [info, setInfo] = useState<InfoData>(); //info는 빈 객체로 인식한다.
  const [priceInfo, setPriceInfo] = useState(); //priceInfo는 빈 객체로 인식한다.

  console.log(coinId);

  useEffect(() => {
    (async () => {
      const infoData = await axios(
        `https://api.coinpaprika.com/v1/coins/${coinId}`
      );
      console.log(infoData.data);

      const priceData = await axios(
        `https://api.coinpaprika.com/v1/tickers/${coinId}`
      );
      console.log(priceData.data);
      setInfo(infoData.data);
    })();
  }, [coinId]);

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
      {/* priceInfo?.quotes.USD */}
    </Container>
  );
}
export default Coin;
