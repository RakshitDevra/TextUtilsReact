import React,{useState} from 'react'

export default function About(props) {
  // const [myStyle,newStyle]=useState({
  //   //  width :100,
  //   margin:5,
  //   color:'black',
  //   backgroundColor :'white'
  // })
  let myStyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'black':'white',
  


  }
  // const [btntext ,newText]=useState('Enable dark mode')  //button text ko change karna hai isiliye as a state variable pass kiya 
  //  let changeMode= () =>{
  //   if(myStyle.backgroundColor ==='white'){  //if else isiliye use kiya kyunki dobara se light mode bhi banana hai,nahi toh direct newStyle likh dete iss funtion ke andar.

    
  //   newStyle({
  //     margin:5,
  //     color: 'white',
  //     backgroundColor: 'black',
  //     border:'1 solid red'
  //   })
  //   newText('Enable light mode');
  // }else{
  //   newStyle({                 //Aese new style ko itni baar bhi define kar sakte hai. 
  //     color: 'black',
  //     backgroundColor: 'white'
  //   })
  //   newText('Enable Dark mode')

  // }
  //  }

  // let btnstyle={
  //   margin :10,
  //   color :'red',
  //   backgroundColor:'black'
  // }
  
  return (
    <>
    <div className='container' >
<h1 className='my-3' style={{color:props.mode==='dark'?'white':'black'}}>About us</h1>

    <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
       <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       
       Using TextUtils you can manipulate your text.Can convert it to Uppercase,Lowercase,Remove extra spaces from Text,Copy your text to clipborad,and remove extra spaces from it.App also has a DarkMode and alerts for a better User Experience
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
      <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      This word counter works in any browser such as Chrome,Firefox,Internet Explorere,Safari,Opera,also it is Mobile Responsive. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}><strong>Applications</strong>
      
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      It suits to count characters and words in facebook,blog,excel documents,pdf documents ,essays,etc .It is suitable for writing text with word/character limit. 
      </div>
    </div>
  </div>
</div>

</div>
{/* <div className='container my-7'>
<button type="button" class="btn btn-dark" style={btnstyle} onClick={changeMode}>{btntext}</button>
</div> */}
</>
  )
}
// .TextUtlis is my first project using Reactjs.It is made with the help of Bootstrap.