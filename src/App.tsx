import {useState} from 'react';
import {useRef} from 'react';
export default function App() {
  const winSound = useRef(new Audio("/sounds/win.mp3"));
  const loseSound = useRef(new Audio("/sounds/lose.mp3"));
  const playWin = () => {
    winSound.current.currentTime = 0;
    winSound.current.play();
  };
  const playLose = () => {
    loseSound.current.currentTime = 0;
    loseSound.current.play();
  };


  const [nums, setNums] = useState([0,0,0]);
  const random = () => Math.floor(Math.random()*10);
  const play = () => {
    const newNums = [random(), random(), random()];
    setNums(newNums);
    const sum = newNums[0] + newNums[1] + newNums[2];
    if(sum === 15) {
      playWin();
    }else{
      playLose();
    }
  };
  const sum = nums[0] + nums[1] + nums[2];

  return(
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-5 py-16 text-white">
      <div className="w-full max-w-xl bg-gray-900/60 border border-white/10 rounded-2xl flex flex-col gap-12 items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-yellow-400 tracking-widest"> XV FORTUNE</h1>
        <h2>Unlock Your Fortune With 15</h2>
        <div className="flex gap-4 ">
          {nums.map((num, key) => {
          return(
            <div key={key} className="bg-gray-950 border border-white/10 h-20 w-20 rounded-lg flex items-center justify-center ">
                {num}
            </div>
          )
          })}
        </div>
        
        <button 
          type="button"
          className="w-full py-2 bg-yellow-600 text-black font-semibold rounded-lg hover:bg-yellow-400 transition duration-500 border-none outline-none focus:outline-none ring-0 focus:ring-0"
          onClick={play}>
            Try your luck</button>

          {/* {sum == 15 ? <p>🎉 You have won a jackpot</p> : <p>Try next time</p>} */}
        <p className={`text-xl ${sum == 15 ? "text-green-400" : "text-red-500"}`}>{ sum == 15 ? "🎉 You have won a jackpot ! ": "Try next time !"} </p>
      </div>
      
    </div>
  )
}