import './App.css';
import { Heading } from './components/Heading';
import { Heading2 } from './components/Heading2';
import { Heading3 } from './components/Heading3';
import { Heading4 } from './components/Heading4';
import { Heading5 } from './components/Heading5';
import { Heading6 } from './components/Heading6';
import { AppButton } from './components/AppButton';
import audi from './components/img/Audi.jpg';
import bmw from './components/img/Bmw.jpg';
import lamba from './components/img/lamba.jpg';
import { Paragraf } from './components/Paragraf';



function App() {
  return (
    <div className="App">
      <Heading text={"Рынок Машин"}/>
      <Heading2 text={"Рынок иномарок"} />
      <Paragraf text={"Вы находитесь рынке номер один по иномаркам"}/>
      <Heading3 text={"Каталог Машин"} />
      <div className='car'>
        <div>
          <img src={audi}/>
          <Heading4 text={"Audi"}/>
          <Heading5 text={"Sport"} />
          <Paragraf text={"Audi R8 с 5,2-литровым атмосферным двигателем V10 мощностью в 525 лошадиных сил.Салон украшен декоративными вставками из карбона и алюминия. Также автомобиль оснащается аудиосистемой Bang & Olufsen с 12 динамиками. На Audi R8 в стандартной комплектации устанавливаются 18-дюймовые диски с шинами размерности 235/40 на передней оси и 285/35 на задней."}/>
          <Heading6 text={'$70.000'}/>
          <AppButton button={"Купить"}/>
        </div>
        <div>
        <img src={bmw}/>
          <Heading4 text={"Bmw"}/>
          <Heading5 text={"Largeboy Car"} />
          <Paragraf text={`Двигатель: 3,0-литровый 6-цилиндровый рядный мотор M TwinPower Turbo, отвечающий нормам Евро-6. Мощность: не менее 425 л.с. (на 5 л.с. больше, чем 4-литровый V8 на прежнем поколении BMW M3) в диапазоне 5500-7300 об/мин, а также крутящий момент 550 Нм (на 40% выше показателя предшествующего агрегата) при 1850-5500 оборотах`}/>
          <Heading6 text={'$55.000'}/>
          <AppButton button={"Купить"}/>
        </div>
        <div>
          <img src={lamba}/>
          <Heading4 text={"Lamba"}/>
          <Heading5 text={"SuperSport"} />
          <Paragraf text={`6,5-литровым V-образным 12-цилиндровым двигателем мощностью от 700 до 780 л. с. в`}/>
          <Heading6 text={'$125.000'}/>
          <AppButton button={"Купить"}/>
        </div>
        
      </div>
      




    </div>
  );
}

export default App;
