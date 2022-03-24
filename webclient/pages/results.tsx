import { NextPage } from 'next';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Scroll from '../components/Scroll';
import Link from 'next/link';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Results: NextPage = () => {
  const { error, loading } = useTypedSelector((state) => state.laws);

  const data = [
    {
      id: 1203032,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 1203034,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 1203033,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 1203031,
      type: 'Organic Law',
      chapter: 'Section 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 1103031,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 1204031,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 1203051,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 1203631,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 1209031,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 1203037,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 1203097,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 1853027,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 2283037,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 2203037,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 1253027,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 2283137,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 2203237,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 1253328,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 2284037,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
    {
      id: 2213037,
      type: 'Organic Law',
      chapter: 'Chapter 1',
      article: 'Article 1',
      heading: 'Lorem Ipsum dolor',
      intro: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkaj',
      text: 'fadsfasdf fkasdflkasjdf; ;alsdkfja;sldfkjas;l falsdfja;sdlfkjasd ffasdf fa;sdflajs; flsa;fdlja;sld fasdkfa;sdjlfkajf fasdflajsdf;lj ;ladksjf;al;sdfja;sldfkja;sd a;lsdfkja;sdlfjas;dlf  ;aldskfja;lsdfkja;sdlf ;lkdsf;alsdfkja;lsdfkja;sdl l;adfja;lsdfja;sdlfkjasdlf ;alsdfkjas;dlfkjads; alsdkfja;lsdfjk;gha;sldfafgjhadksfjhads;lfja;sdlfasdkjgh',
    },
  ];

  return (
    <div>
      <Head>
        <title>Results</title>
        <meta name='description' content='Donate' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <Scroll>
        <main className='lg:mx-24 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
          {error && <h3>{error}</h3>}
          {loading && <h3>Loading...</h3>}
          {data.length === 0 ? (
            <h3>No Results</h3>
          ) : (
            data.map((item) => (
              <div className='m-2 p-2 min-h-32 border border-2 rounded-lg border-black bg-light-gray' key={item.id}>
                <span className='flex flex-wrap'>
                  <div className='text-white text-xs px-3 border border-2 border-black rounded-md bg-dark-blue mt-2'>{item.type}</div>
                  <div className='text-white text-xs mx-1 px-3 border border-2 border-black rounded-md bg-dark-gold mt-2'>{item.chapter}</div>
                  <div className='text-white text-xs mx-1 px-3 border border-2 border-black rounded-md bg-dark-green mt-2'>{item.article}</div>
                </span>
                <h2 className='text-4xl font-semibold py-2'>{item.heading}</h2>
                <p>{item.intro}</p>
                <Link href='/result'>
                  <button className='text-sm mt-4 p-1.5 px-3 float-right bg-gold rounded-md'>Read More</button>
                </Link>
              </div>
            ))
          )}
        </main>
      </Scroll>
    </div>
  );
};

export default Results;
