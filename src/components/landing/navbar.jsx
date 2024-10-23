

const NavBar = () => {
  return (
      <header  style={{display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
              <div>
                  <img src="../public/logo.png" alt="Logo"></img>
              </div>
              <ul style={{display:"flex",flexDirection:"row",gap:"20px",fontFamily:"arial"}}>
                  <li>Home</li>
                  <li>Programs</li>
                  <li>Professional Education</li>
                  <li>Courses</li>
                  <li>Admissions</li>
                  <li>Testimonials</li>
              </ul>
          <div>
              <a href="">Login</a>
                  <button>Registration</button>
              </div>

      </header>
  );
};

export default NavBar;
