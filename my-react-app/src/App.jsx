import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockDisplay from './components/Clock'
import ActivityFinder from './components/ActivityFinder'
import BitcoinRates from './components/bitcoinRates'
import RefCounter from './components/refCounter'
import VideoPlayer from './components/videoPlayer'
import ReducerCounter from './components/reducerCounter'
import PostListReducer from './components/postListReducer'
import SubscribeForm from './components/SubscribeForm'
import { UserProvider } from './context/UserContext'
import LoginForm from './components/LoginForm'
import MyThemeProvider from './context/MyThemeProvider'






function App() {
  const [count, setCount] = useState(0)

  return (


    <div className="App">

      <UserProvider />
      {/* <MyThemeProvider> */}
      {/* <ClockDisplay /> */}
      {/* <ActivityFinder /> */}
      {/* <BitcoinRates /> */}
      {/* <RefCounter /> */}
      {/* <BitcoinRates /> */}
      {/* <VideoPlayer /> */}
      {/* <ReducerCounter /> */}
      {/* <PostListReducer /> */}
      {/* <SubscribeForm /> */}
      <LoginForm />
      {/* </MyThemeProvider> */}
      <UserProvider />
      {/* <EmojiProvider>
      <Emoji />
      <BitcoinRates /> */}

      {/* </EmojiProvider> */}


    </div>
  );
};

export default App
