

const Info = prop => {

  const styleObj = {
    fontFamily: "Times New Roman, sans-serif",
    fontSize: "30px",
    marginTop: "30px",
       transition: "color 0.3s",
       ":hover": {
            color: "blue",
            cursor: "pointer",
       },  
  };

  return (
  <div style={{padding: '0 200px'}}>
    <p style={styleObj} className="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div> 
  );

}

export  {Info};