import './App.css'; 
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import usericon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import {sendMsgToOpenAI} from './openai';
import { useState } from 'react';
function App() {

  const [input, setInput] = useState("");

   const handleSend = async () => {
      const res = await sendMsgToOpenAI(input);
      console.log(res);
   }

  return (
    <div className="App">
      <div className="sideBar">  
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="New Chat" className="addBtn" />New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />What is Programming?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />How to use an API?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listitem">
            <img src={home} alt="Home" className="listitemimg" />Home
          </div>
          <div className="listitem">
            <img src={saved} alt="Saved" className="listitemimg" />Saved
          </div>
          <div className="listitem">
            <img src={rocket} alt="Upgrade" className="listitemimg" />Upgrade to pro
          </div>
        </div>
      </div>
      <div className="main">
          <div className="chats">
             <div className="chat">
              <img className='chatimg' src={usericon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, perspiciatis adipisci. Dolor velit quia omnis similique incidunt tempora, totam nihil.</p>
             </div>
             <div className="chat bot">
              <img className='chatimg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam explicabo accusantium nisi. Reiciendis quod accusantium quae ipsum aliquam sapiente alias veniam provident minima eligendi quibusdam, placeat ut consequatur harum facere nihil sequi delectus? Laudantium adipisci nulla iusto impedit nemo, odit cupiditate mollitia. Tenetur fugit illum culpa illo nulla quod voluptatibus, iste, provident harum, id iure. Voluptate vero expedita assumenda blanditiis aspernatur dolorem doloremque quam quis quibusdam? Facilis quas recusandae nulla illo vel. Id expedita atque adipisci amet sapiente laboriosam eius, voluptates unde aperiam perspiciatis earum quisquam rem consequuntur alias, ipsa at? Quaerat voluptate aperiam numquam, tenetur eveniet pariatur error perferendis.</p>
             </div>
          </div>
          <div className="chatfooter">
            <div className="inp">
              <input type="text" placeholder='Send a message' value={input} onChange={(e)=>{setInput(e.target.value)}}/> <button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
            </div>
            <p>ChatGPT may produce inaccurate information about people, place, or facts. ChatGPT August 11 Version.
            </p>
          </div>
      </div>
    </div>
  );
}

export default App;
