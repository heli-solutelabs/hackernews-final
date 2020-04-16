import Link from 'next/link'
import Head from 'next/head';

const categories = ['top','new','show','ask']

const Nav = () => (
    <nav className="navStyle">
      <ul>
      <Head>
        <title>STORIES</title>
      </Head>       
        {categories.map((category,index) => (
            <div className="navStyle">
                    <ul>
                        <li key={index}>
                            <Link href={`/?category=${category}`}>
                                    <a>{`${category}`} STORIES</a>
                            </Link>
                        </li>
                    </ul>
                
                <style>{`
                .navStyle{
                    width:80%;
                    margin:auto;
                }
                ul{
                    display:flex;
                    justify-content:space-between;
                    padding:0;

                }
                li{
                    list-style:none;
                }
                a{
                    text-decoration:none;
                    text-transform:uppercase;
                    color:black;
                    font-weight:bolder;
                    transform:scaleY(1.1);
                }
                `}</style>
           </div>
          
        ))}
      </ul>
    </nav>
  )
export default Nav;