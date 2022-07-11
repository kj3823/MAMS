import './About.css';
export default function About() {
    return (
      <main className="main-about" style={{ padding: "1rem 0" }}>
        <h2 style={{textAlign: "center" , fontWeight: "bolder", textshadow: "1px 2px 2px black" , fontFamily: "sans-serif"}}>About MAMS(MBITS ASSET MANAGEMENT SYSTEM)</h2><br></br>
        <p className='container-xl'>MAMS is a powerful software used to manage the assets of MBITS.It helps MBITS to categorize it's assets,update it's information 
          and delete information about the assets that are no longer available.Users can interact with the system via a web interface.<br></br><br></br> Developing a good interface to a database where information are stored  
          often helps to provide good overviews,good updates and low maintenance costs. This paper is just about such a system that the author worked on , called the MBITS asset management system(MAMS).<br></br><br></br>
        </p>
    </main>
    );
  }