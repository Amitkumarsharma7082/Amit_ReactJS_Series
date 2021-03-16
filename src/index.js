import React from 'react';
import ReactDOM from 'react-dom';
import pic from "/Users/amitkumarsharma/Desktop/my-app/src/myPic.jpg";
import pic1 from "/Users/amitkumarsharma/Desktop/my-app/src/mypic1.jpg";
import pic2 from "/Users/amitkumarsharma/Desktop/my-app/src/myPic2.jpg";




function Card(props)
{
  console.log(props)
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="myPic" className="card-img" />
                <div className="card_info">
                    <span className="card_category"> {props.title} </span>
                    <h3 className="card_title">{props.sname} </h3>
                    <a href={props.link} target="_blank">
                        <button> Watch Now </button>
                    </a>
     
                </div>
            </div>
          </div>
         
         </>
    )
}
ReactDOM.render(
  <>
   <Card imgsrc={pic}
   title="A Netflix Orignal Series"
   sname="DARK"
   link="https://www.netflix.com/title/80100172" />


    <Card imgsrc={pic1}
   title="A Netflix Orignal Series"
   sname="MONEY HEIST"
   link="https://www.netflix.com/title/80192098" />

<Card imgsrc={pic2}
   title="A Netflix Orignal Series"
   sname="NARCOS"
   link="https://www.netflix.com/title/80025172" />
  
   </>
    ,document.getElementById("root")
  );


