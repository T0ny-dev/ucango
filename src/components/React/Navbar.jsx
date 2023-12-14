import "./Navbar.css"

function Navbar () {
    return (
      <div  className="navbar">
				<div className="navbar__logo">
					<img src="https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/app%20UcanGo%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L2FwcCBVY2FuR28gKDEpLnBuZyIsImlhdCI6MTcwMjUyNjgxNiwiZXhwIjoxNzM0MDYyODE2fQ.uWyr--lacXnCqmyXY5Yjh1TERLEp0FsuWqGIKHUYGew&t=2023-12-14T04%3A06%3A55.257Z" alt="logo ucanGO"/>
				</div>
				<div className="navbar__menu">
					{/* Main Menu*/}
					<a href="https://editor.apphive.io/webapp/proj_9WJDsmshTK/app_cPd9p6DiU2EW5jwxKtjDsQ" target="_blank">Aplicacion Demo Avance</a>
					<a href="https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/ucango?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L3VjYW5nbyIsImlhdCI6MTcwMjUzMTE2OSwiZXhwIjoxNzM0MDY3MTY5fQ.NnRCJiOHrazTMR4rGZ6p76Uu1YUdNRgbuRNeC5rr4uo&t=2023-12-14T05%3A19%3A28.101Z" target="_blank">Video demo prototipo</a>
					<a href="#register">
					<button className="button__primary" >¡REGISTRARME AHORA!</button>
					</a>
				</div>
			</div>
    )
}

export default Navbar;