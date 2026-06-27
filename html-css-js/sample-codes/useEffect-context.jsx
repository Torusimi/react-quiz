import {useContext, createContext, useState, useEffect} from 'react';

const ThemeContext = createContext('light');

export default function Myapp(){
  const [theme, setTheme] = useState('light')
  const [count, setCount] = useState(0);

  useEffect(() =>{
    const timer = setInterval(() =>{
      setCount(c => c + 1);
    },1000)
    return () => clearInterval(timer);
  },[])
  
  return(
     <>
      <ThemeContext value={theme}>
        <Form />
      </ThemeContext>
      <p>カウント: {count}</p>
      <Button onClick={() =>{
        setTheme(theme === `dark` ? 'light' : 'dark');
      }}>
        Toggle theme
      </Button>
     </>
  )
}

function Form({ title, children }){
  return(
    <Panel title="WelCome">
      <Button>Sign up </Button>
      <Button>Login </Button>
    </Panel>
  )
}

function Panel ({ title, children }){
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;

  return(
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({children, onClick}){
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return(
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
