// import axios from "axios";
// import { useState } from "react";
import NFTImageGenerator from "./NftImageGenerator";

function App() {
  // const [prompt, setPrompt] = useState("");
  // const [imageURL, setImageURL] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  // const openaiAPIKey = "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";

  // const generateImage = async (e) => {
  //   e.preventDefault();
  //   if (!prompt) return alert("Write your prompt");
    
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.post(
  //       "https://api.openai.com/v1/images/generations",
  //       {
  //         model: "image-alpha-001-attn", prompt: prompt, size: "512x512",
  //       },
  //       { headers: {
  //           "Content-Type": "application/json",Authorization: `Bearer ${openaiAPIKey}`,
  //         },
  //       }
  //     );
  //     setImageURL(response.data.data[0].url);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsLoading(false);
  //     alert(error.message);
  //   }
  // };


  return (
    <div>
      <NFTImageGenerator />
      {/* <div class="searchbox-wrap">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Search for something..."
        />
        {!isLoading ? (
          <button onClick={generateImage}>
            <span>Generate </span>{" "}
          </button>
        ) : (
          <button disabled className="loading">
            <span>generating... </span>
          </button>
        )}
      </div>
      <br />
      <div className="output">
        {imageURL && <img width={500} src={imageURL} alt="" />}
      </div> */}
    </div>
  );



}

export default App;
