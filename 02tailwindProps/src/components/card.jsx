import React from 'react'

function Card  ({TitleData="A Random Picture",source,Info}) // the destructring the porps also written in form of (props)
{
    // console.log(props);
  return (
  <div class="flex flex-col items-center gap-6 p-7 rounded-2xl">
  <div>
    <img class="h-60 w-150 shadow-xl rounded-sm" alt="" src={source}  />
  </div>
  <div className="flex items-center">
    <span className="text-2xl font-medium">{TitleData}</span>
    <span className="font-medium text-sky-500">{Info}</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400"><br/>
      
      <br/>
      
    </span>
  </div>
</div>
  )
}

export default Card