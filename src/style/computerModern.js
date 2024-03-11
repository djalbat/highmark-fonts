"use strict";

import { DEFAULT_HOST } from "../defaults";

const computerModernStyle = (host = DEFAULT_HOST) => `

  @font-face {
    src: url("${host}/css/woff2/cmunrm.woff2");
    font-family: "Computer Modern Serif";
    font-weight: normal;
    font-style: normal;
  }
    
  @font-face {
    src: url("${host}/css/woff2/cmunti.woff2");
    font-family: "Computer Modern Serif";
    font-weight: normal;
    font-style: italic;
  }
    
  @font-face {
    src: url("${host}/css/woff2/cmunbx.woff2");
    font-family: "Computer Modern Serif";
    font-weight: bold;
    font-style: normal;
  }
    
  @font-face {
    src: url("${host}/css/woff2/cmunbi.woff2");
    font-family: "Computer Modern Serif";
    font-weight: bold;
    font-style: italic;
  }  
    
  @font-face {
    src: url("${host}/css/woff2/cmunss.woff2");
    font-family: "Computer Modern Sans";
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    src: url("${host}/css/woff2/cmunsi.woff2");
    font-family: "Computer Modern Sans";
    font-weight: normal;
    font-style: italic;
  }
  
  @font-face {
    src: url("${host}/css/woff2/cmunsx.woff2");
    font-family: "Computer Modern Sans";
    font-weight: bold;
    font-style: normal;
  }
  
  @font-face {
    src: url("${host}/css/woff2/cmunso.woff2");
    font-family: "Computer Modern Sans";
    font-weight: bold;
    font-style: italic;
  }
  
  @font-face {
    src: url("${host}/css/woff2/cmuntt.woff2");
    font-family: "Computer Modern Typewriter";
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    src: url("${host}/css/woff2/cmunit.woff2");
    font-family: "Computer Modern Typewriter";
    font-weight: normal;
    font-style: italic;
  }
    
  @font-face {
    src: url("${host}/css/woff2/cmuntb.woff2");
    font-family: "Computer Modern Typewriter";
    font-weight: bold;
    font-style: normal;
  }
    
  @font-face {
    src: url("${host}/css/woff2/cmuntx.woff2");
    font-family: "Computer Modern Typewriter";
    font-weight: bold;
    font-style: italic;
  }
      
  @font-face {
    src: url("${host}/css/woff2/cmunbmr.woff2");
    font-family: "Computer Modern Bright";
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    src: url("${host}/css/woff2/cmunbmo.woff2");
    font-family: "Computer Modern Bright";
    font-weight: normal;
    font-style: italic;
  }
  
  @font-face {
    src: url("${host}/css/woff2/cmunbbx.woff2");
    font-family: "Computer Modern Bright";
    font-weight: bold;
    font-style: normal;
  }
  
  @font-face {
    src: url("${host}/css/woff2/cmunbxo.woff2");
    font-family: "Computer Modern Bright";
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    src: url("${host}/css/woff2/cmunorm.woff2");
    font-family: "Computer Modern Concrete";
    font-weight: normal;
    font-style: normal;
  }
    
  @font-face {
    src: url("${host}/css/woff2/cmunoti.woff2");
    font-family: "Computer Modern Concrete";
    font-weight: normal;
    font-style: italic;
  }
    
  @font-face {
    src: url("${host}/css/woff2/cmunobx.woff2");
    font-family: "Computer Modern Concrete";
    font-weight: bold;
    font-style: normal;
  }
    
  @font-face {
    src: url("${host}/css/woff2/cmunobi.woff2");
    font-family: "Computer Modern Concrete";
    font-weight: bold;
    font-style: italic;
  }

`;

export default computerModernStyle;
