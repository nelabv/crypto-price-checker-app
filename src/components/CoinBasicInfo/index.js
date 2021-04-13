import React from 'react';
import {
  Header,
  Icon,
  Section,
  CoinName, 
  Ticker, 
  Info, 
  Rank, 
  Text,
  ButtonsDiv, 
  Button
} from './CoinBasicInfoElements';

export default function CoinBasicInfo(props) {
    const fetchData = () => { 
        props.checkWhitepaper();
    }

    const handleSourceCode = () => {
        props.goToSourceCode();
    }

    const iconURL = 'https://icons.bitbot.tools/api/' + props.coin.symbol + '/128x128';

    return (
      <>
        <Header>
            <Icon src={iconURL} alt={`${props.coin.name} logo`} />

            <Section>
                <CoinName>{props.coin.name}</CoinName>
                <Ticker>{props.coin.symbol}</Ticker>
            </Section>
        </Header>
              
        <Info>
          <Rank>Rank {props.coin.rank}</Rank>
          
          <Text>{props.coin.description}</Text>

          <ButtonsDiv>
              { props.hasWhitepaper
                  ? <Button onClick={fetchData}>Whitepaper</Button>
                  : null}

              { props.hasSourceCodeLink
                  ? <Button onClick={handleSourceCode}>Source Code</Button>
                      : null}
          </ButtonsDiv>
        </Info>
      </>
    );
}