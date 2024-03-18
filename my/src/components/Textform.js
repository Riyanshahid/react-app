import React,{useState} from 'react'

export default function Textform(props){
    const  handleupclick=()=>{
        console.log("uppper case was clicked" + text)
        let newtext= text.toUpperCase();
        settext(newtext)

        props.showAlert("Saab Bara ho gaya","success")
    }

    const  handleonchange=(event)=>{
       
        settext(event.target.value)
    }

    const handleClearclick=()=>{
        let newtext='';
        settext(newtext)
        props.showAlert("Saab mitt gaya","success");
    }
    
    const speak=()=>{
        let msg= new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Bola Bola","success");
    }
    const copytext=()=>{
        console.log("i am copy")
     var Text =document.getElementById("mybox");
      Text.select();
      navigator.clipboard.writeText(Text.value);

      props.showAlert("Chaap lea","success");
    }
    

    const capital =()=>{
        let words=text.split()

        let uppercaseword= ''
        words.forEach(element=>{
            uppercaseword+=element.charAt(0).toUpperCase()+element.slice(1)
            
        });
        settext(uppercaseword());

    }

    const countWords = (str) => {
        let words;
        if (text === "") {
    
          words = 0;
        } else {
          words = str.trim().split(/\s+/).length;
        }
        return words;
      };
    

    const [text,settext]=useState("");

    return(
        < >
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
       <div className="mb-3">
     <textarea className="form-control" id="mybox" style={{backgroundColor:props.mode=== 'dark'?'grey':'white'}} onChange={handleonchange} value={text} rows="9"></textarea>
     
      </div>
     <button className="btn btn-primary " onClick={handleupclick}>convert to uppercase</button>
     <button className="btn btn-primary  mx-2" onClick={handleClearclick}>Erase</button>
     
     <button>
     <input className="form-control " type="search" placeholder="first word" aria-label="Search"/>first</button>

     <button>
     <input className="form-control " type="search" placeholder="replace with" aria-label="Search"/>rep</button>
    
     <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
     <button type="submit" onClick={capital} className="btn btn-warning mx-2 my-2">Aa</button>
     <button type="submit" onClick={copytext} className="btn btn-warning mx-2 my-2">Copy </button>

   <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h3>Your summary</h3>
    <p> <b> {text === "" ? 0:countWords(text)}</b>words  and<b> {text.length}</b> characters </p>
    
    <p> <b> Minimun Time to Read</b> {0.008 * text.split(" ").length} </p>
    <h3>Preview</h3>
    <p>{text}</p>
   </div>
</>
    )
}