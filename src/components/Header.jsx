import Link from './Link'

const Header = ()=>{
    const links = [
        {title:'Home', to:'/home'},
        {title:'Cities', to:'/cities'}
    ]

    return(
        <div className='bg-gray-900 text-gray-100  flex-row' >
        <header className='header-container'>
            <h1 className='text-6xl '> 
            My tynerary
            </h1>
            <div>
            {
                links.map((link) => (<Link key={link.title} title={link.title} to={link.to}/>))
            }
            </div>
        </header>
        </div>
    )
}

export default Header