import React from 'react'
import Mann from '../components/Mann'
import Row from '../components/Row'
import request from '../Request'

const Home = () => {
  return (
    <>
        <Mann />
        <Row rowID='1' title='UpComing' fetchURL={request.requestUpcoming} /> 
        <Row rowID='2' title='Popular' fetchURL={request.requestPopular} /> 
        <Row rowID='3' title='Trending' fetchURL={request.requestTrending} /> 
        <Row rowID='4' title='Horror' fetchURL={request.requestHorror} /> 
        <Row rowID='5' title='TopRated' fetchURL={request.requestTopRated} /> 

    </>
  )
}

export default Home