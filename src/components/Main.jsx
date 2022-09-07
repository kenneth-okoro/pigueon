import user from '../assets/pngwing.png'

function Main() {
  return (
    <div className="main-content">

     <div className="left">
      <h2>Administration is our specialty <span>and we are well equipped to do that.</span></h2>
      <p className='left-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, earum, deserunt nulla numquam praesentium vitae ad sunt at delectus nemo, voluptates reiciendis quod ipsa vero.</p>
      <a href="#" className="continue">Lorem, ipsum dolor.</a>
     </div>

     <div className="right">
     <img src={user} alt="user" />
     </div>
    </div>
  )
}

export default Main