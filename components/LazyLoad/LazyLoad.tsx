'use client'
import React from 'react'
import ContentLoader from 'react-content-loader'
import { ClipLoader, FadeLoader } from 'react-spinners'
import { BeatLoader } from 'react-spinners'
import { useWindowSize } from '../../hook/useWindowSize'

export const LazyLoad = () => {
  return (
    <div className=' container mx-auto  '>
      <div className=' flex justify-center items-center '>
        <FadeLoader color='#757575' />
      </div>
    </div>
  )
}

export const MiniSpinner = () => {
  return (
    <div className=' flex justify-start items-center w-1/12 '>
      <BeatLoader color='#757575' size={8} />
    </div>
  )
}

export const LineWaveSpinner = () => {
  return (
    <div className=' container mx-auto  '>
      <div className=' flex justify-center items-center '>
        <ClipLoader color='#36d7b7' />
      </div>
    </div>
  )
}

export const FilterLoader = () => {
  return (
    <div className=' p-4 '>
      <ContentLoader
        speed={2}
        width={200}
        height={800}
        viewBox='0 0 200 800'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
      >
        <rect x='0' y='13' rx='3' ry='3' width='180' height='26' />
        <rect x='3' y='80' rx='3' ry='3' width='69' height='25' />
        <rect x='123' y='79' rx='3' ry='3' width='61' height='25' />
        <rect x='1' y='50' rx='3' ry='3' width='131' height='18' />
        <rect x='4' y='112' rx='3' ry='3' width='181' height='18' />
        <rect x='1' y='174' rx='3' ry='3' width='125' height='18' />
        <rect x='0' y='203' rx='3' ry='3' width='112' height='18' />
        <rect x='1' y='232' rx='3' ry='3' width='125' height='18' />
        <rect x='0' y='261' rx='3' ry='3' width='103' height='18' />
        <rect x='2' y='289' rx='3' ry='3' width='120' height='18' />
        <rect x='1' y='318' rx='3' ry='3' width='107' height='18' />
        <rect x='2' y='347' rx='3' ry='3' width='115' height='18' />
        <rect x='1' y='376' rx='3' ry='3' width='127' height='18' />
        <rect x='5' y='438' rx='3' ry='3' width='173' height='18' />
        <rect x='4' y='467' rx='3' ry='3' width='156' height='18' />
        <rect x='5' y='496' rx='3' ry='3' width='173' height='18' />
        <rect x='4' y='525' rx='3' ry='3' width='161' height='18' />
        <rect x='7' y='553' rx='3' ry='3' width='173' height='18' />
        <rect x='5' y='582' rx='3' ry='3' width='145' height='18' />
        <rect x='7' y='611' rx='3' ry='3' width='164' height='18' />
        <rect x='5' y='640' rx='3' ry='3' width='163' height='18' />
        <rect x='8' y='667' rx='3' ry='3' width='173' height='18' />
        <rect x='7' y='696' rx='3' ry='3' width='156' height='18' />
        <rect x='8' y='725' rx='3' ry='3' width='173' height='18' />
        <rect x='7' y='754' rx='3' ry='3' width='161' height='18' />
      </ContentLoader>
    </div>
  )
}

export const ProductLoader = () => {
  const { size } = useWindowSize()

  return (
    <div className=''>
      {size[0] < 768 ? (
        <ContentLoader
          speed={2}
          width={400}
          height={800}
          viewBox='0 0 500 1000'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <circle cx='96' cy='90' r='84' />
          <rect x='13' y='190' rx='0' ry='0' width='177' height='19' />
          <rect x='14' y='228' rx='0' ry='0' width='177' height='26' />
          <rect x='15' y='267' rx='0' ry='0' width='177' height='21' />
          <rect x='13' y='319' rx='0' ry='0' width='177' height='35' />
          <rect x='158' y='-2' rx='0' ry='0' width='43' height='17' />
          <rect x='-3' y='-1' rx='0' ry='0' width='43' height='17' />
          <rect x='120' y='390' rx='0' ry='10' width='60' height='35' />

          <circle cx='340' cy='90' r='84' />
          <rect x='250' y='190' rx='0' ry='0' width='177' height='19' />
          <rect x='250' y='228' rx='0' ry='0' width='177' height='26' />
          <rect x='250' y='267' rx='0' ry='0' width='177' height='21' />
          <rect x='250' y='319' rx='0' ry='0' width='177' height='35' />
          <rect x='250' y='-2' rx='0' ry='0' width='43' height='17' />
          <rect x='400' y='-1' rx='0' ry='0' width='43' height='17' />
          <rect x='370' y='390' rx='0' ry='10' width='60' height='35' />
        </ContentLoader>
      ) : (
        <ContentLoader
          speed={2}
          width={800}
          height={800}
          viewBox='0 0 800 800'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <circle cx='96' cy='90' r='84' />
          <rect x='13' y='190' rx='0' ry='0' width='177' height='19' />
          <rect x='14' y='228' rx='0' ry='0' width='177' height='26' />
          <rect x='15' y='267' rx='0' ry='0' width='177' height='21' />
          <rect x='13' y='319' rx='0' ry='0' width='177' height='35' />
          <rect x='158' y='-2' rx='0' ry='0' width='43' height='17' />
          <rect x='-3' y='-1' rx='0' ry='0' width='43' height='17' />
        </ContentLoader>
      )}
    </div>
  )
}

export const PageCatalog = () => {
  const { size } = useWindowSize()

  return (
    <div>
      {size[0] < 1024 ? (
        size[0] < 768 ? (
          <ContentLoader
            speed={2}
            width={400}
            height={1200}
            viewBox='0 0 400 1200'
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'
          >
            <rect x='30' y='58' rx='10' ry='10' width='150' height='160' />
            <rect x='200' y='58' rx='10' ry='10' width='150' height='160' />
            <rect x='30' y='220' rx='10' ry='10' width='150' height='160' />
            <rect x='200' y='220' rx='10' ry='10' width='150' height='160' />

            <rect x='30' y='420' rx='10' ry='10' width='320' height='20' />
            <rect x='30' y='450' rx='10' ry='10' width='320' height='20' />
            <rect x='30' y='480' rx='10' ry='10' width='320' height='20' />

            <rect x='30' y='570' rx='10' ry='10' width='220' height='15' />
            <rect x='30' y='600' rx='10' ry='10' width='170' height='13' />

            <rect x='30' y='650' rx='10' ry='10' width='320' height='23' />

            <rect x='30' y='690' rx='10' ry='10' width='150' height='270' />
            <rect x='200' y='690' rx='10' ry='10' width='150' height='270' />
          </ContentLoader>
        ) : (
          <ContentLoader
            speed={2}
            width={768}
            height={1200}
            viewBox='0 0 768 1200'
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'
          >
            <rect x='20' y='58' rx='10' ry='10' width='360' height='160' />
            <rect x='390' y='58' rx='10' ry='10' width='360' height='160' />
            <rect x='20' y='230' rx='10' ry='10' width='360' height='160' />
            <rect x='390' y='230' rx='10' ry='10' width='360' height='160' />

            <rect x='20' y='470' rx='10' ry='10' width='210' height='20' />
            <rect x='500' y='470' rx='10' ry='10' width='250' height='20' />

            <rect x='20' y='520' rx='10' ry='10' width='250' height='20' />
            <rect x='590' y='520' rx='10' ry='10' width='150' height='20' />

            <rect x='5' y='590' rx='10' ry='10' width='247' height='350' />
            <rect x='260' y='590' rx='10' ry='10' width='247' height='350' />
            <rect x='515' y='590' rx='10' ry='10' width='247' height='350' />
          </ContentLoader>
        )
      ) : (
        <ContentLoader
          speed={2}
          width={1366}
          height={1600}
          viewBox='0 0 1366 1600'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <rect x='0' y='58' rx='10' ry='10' width='271' height='160' />
          <rect x='0' y='58' rx='10' ry='10' width='271' height='160' />
          <rect x='278' y='58' rx='10' ry='10' width='271' height='160' />
          <rect x='556' y='58' rx='10' ry='10' width='271' height='160' />
          <rect x='834' y='58' rx='10' ry='10' width='271' height='160' />
          <rect x='1112' y='58' rx='10' ry='10' width='250' height='160' />

          <rect x='0' y='260' rx='3' ry='3' width='810' height='10' />
          <rect x='0' y='280' rx='3' ry='3' width='580' height='10' />
          <rect x='0' y='300' rx='3' ry='3' width='378' height='10' />
          <rect x='0' y='320' rx='3' ry='3' width='178' height='10' />

          <rect x='0' y='350' rx='3' ry='3' width='300' height='30' />
          <rect x='1100' y='350' rx='3' ry='3' width='300' height='30' />

          <rect x='0' y='395' rx='3' ry='3' width='200' height='20' />

          <circle cx='420' cy='520' r='84' />
          <rect x='330' y='620' rx='0' ry='0' width='177' height='19' />
          <rect x='330' y='650' rx='0' ry='0' width='177' height='26' />
          <rect x='330' y='690' rx='0' ry='0' width='177' height='21' />
          <rect x='330' y='730' rx='0' ry='0' width='177' height='35' />

          <circle cx='690' cy='520' r='84' />
          <rect x='597' y='620' rx='0' ry='0' width='177' height='19' />
          <rect x='597' y='650' rx='0' ry='0' width='177' height='26' />
          <rect x='597' y='690' rx='0' ry='0' width='177' height='21' />
          <rect x='597' y='730' rx='0' ry='0' width='177' height='35' />

          <circle cx='960' cy='520' r='84' />
          <rect x='864' y='620' rx='0' ry='0' width='177' height='19' />
          <rect x='864' y='650' rx='0' ry='0' width='177' height='26' />
          <rect x='864' y='690' rx='0' ry='0' width='177' height='21' />
          <rect x='864' y='730' rx='0' ry='0' width='177' height='35' />

          <circle cx='1225' cy='520' r='84' />
          <rect x='1135' y='620' rx='0' ry='0' width='177' height='19' />
          <rect x='1135' y='650' rx='0' ry='0' width='177' height='26' />
          <rect x='1135' y='690' rx='0' ry='0' width='177' height='21' />
          <rect x='1135' y='730' rx='0' ry='0' width='177' height='35' />

          <circle cx='1225' cy='900' r='84' />
          <rect x='1135' y='1000' rx='0' ry='0' width='177' height='19' />
          <rect x='1135' y='1030' rx='0' ry='0' width='177' height='26' />
          <rect x='1135' y='1070' rx='0' ry='0' width='177' height='21' />
          <rect x='1135' y='1110' rx='0' ry='0' width='177' height='35' />

          <circle cx='420' cy='900' r='84' />
          <rect x='330' y='1000' rx='0' ry='0' width='177' height='19' />
          <rect x='330' y='1030' rx='0' ry='0' width='177' height='26' />
          <rect x='330' y='1070' rx='0' ry='0' width='177' height='21' />
          <rect x='330' y='1110' rx='0' ry='0' width='177' height='35' />

          <circle cx='690' cy='900' r='84' />
          <rect x='597' y='1000' rx='0' ry='0' width='177' height='19' />
          <rect x='597' y='1030' rx='0' ry='0' width='177' height='26' />
          <rect x='597' y='1070' rx='0' ry='0' width='177' height='21' />
          <rect x='597' y='1110' rx='0' ry='0' width='177' height='35' />

          <circle cx='960' cy='900' r='84' />
          <rect x='864' y='1000' rx='0' ry='0' width='177' height='19' />
          <rect x='864' y='1030' rx='0' ry='0' width='177' height='26' />
          <rect x='864' y='1070' rx='0' ry='0' width='177' height='21' />
          <rect x='864' y='1110' rx='0' ry='0' width='177' height='35' />

          <rect x='0' y='450' rx='3' ry='3' width='190' height='26' />
          <rect x='0' y='490' rx='3' ry='3' width='180' height='25' />
          <rect x='0' y='530' rx='3' ry='3' width='170' height='25' />
          <rect x='0' y='570' rx='3' ry='3' width='160' height='25' />
          <rect x='0' y='610' rx='3' ry='3' width='160' height='25' />
          <rect x='0' y='650' rx='3' ry='3' width='160' height='25' />
          <rect x='0' y='690' rx='3' ry='3' width='160' height='25' />
          <rect x='0' y='730' rx='3' ry='3' width='160' height='25' />
          <rect x='0' y='770' rx='3' ry='3' width='160' height='25' />
          <rect x='0' y='810' rx='3' ry='3' width='160' height='25' />
          <rect x='0' y='850' rx='3' ry='3' width='160' height='25' />
          <rect x='0' y='890' rx='3' ry='3' width='160' height='25' />
          <rect x='0' y='930' rx='3' ry='3' width='160' height='25' />
          <rect x='0' y='970' rx='3' ry='3' width='160' height='25' />
          <rect x='0' y='1010' rx='3' ry='3' width='160' height='25' />
          <rect x='0' y='1050' rx='3' ry='3' width='160' height='25' />
        </ContentLoader>
      )}
    </div>
  )
}

export const PageCategory = () => {
  const { size } = useWindowSize()

  return (
    <div>
      {size[0] < 1024 ? (
        size[0] < 768 ? (
          <ContentLoader
            speed={2}
            width={400}
            height={1200}
            viewBox='0 0 400 1200'
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'
          >
            <rect x='20' y='30' rx='10' ry='10' width='160' height='180' />
            <rect x='200' y='30' rx='10' ry='10' width='160' height='180' />
            <rect x='200' y='240' rx='10' ry='10' width='160' height='15' />
            <rect x='200' y='280' rx='10' ry='10' width='160' height='15' />
            <rect x='200' y='320' rx='10' ry='10' width='160' height='15' />
            <rect x='200' y='360' rx='10' ry='10' width='160' height='15' />
            <rect x='200' y='400' rx='10' ry='10' width='160' height='15' />
            <rect x='200' y='440' rx='10' ry='10' width='160' height='15' />
            <rect x='200' y='480' rx='10' ry='10' width='160' height='15' />
            <rect x='200' y='520' rx='10' ry='10' width='160' height='15' />

            <rect x='30' y='240' rx='10' ry='10' width='160' height='15' />
            <rect x='30' y='280' rx='10' ry='10' width='160' height='15' />
            <rect x='30' y='320' rx='10' ry='10' width='160' height='15' />
            <rect x='30' y='360' rx='10' ry='10' width='160' height='15' />
            <rect x='30' y='400' rx='10' ry='10' width='160' height='15' />
            <rect x='30' y='440' rx='10' ry='10' width='160' height='15' />
            <rect x='30' y='480' rx='10' ry='10' width='160' height='15' />
            <rect x='30' y='520' rx='10' ry='10' width='160' height='15' />
          </ContentLoader>
        ) : (
          <ContentLoader
            speed={2}
            width={768}
            height={1200}
            viewBox='0 0 768 1200'
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'
          >
            <rect x='10' y='58' rx='10' ry='10' width='240' height='160' />
            <rect x='263' y='58' rx='10' ry='10' width='240' height='160' />
            <rect x='515' y='58' rx='10' ry='10' width='240' height='160' />

            <rect x='515' y='250' rx='10' ry='10' width='240' height='15' />
            <rect x='515' y='290' rx='10' ry='10' width='220' height='15' />
            <rect x='515' y='330' rx='10' ry='10' width='210' height='15' />
            <rect x='515' y='370' rx='10' ry='10' width='230' height='15' />
            <rect x='515' y='410' rx='10' ry='10' width='220' height='15' />
            <rect x='515' y='450' rx='10' ry='10' width='210' height='15' />
            <rect x='515' y='490' rx='10' ry='10' width='240' height='15' />


            <rect x='263' y='250' rx='10' ry='10' width='240' height='15' />
            <rect x='263' y='290' rx='10' ry='10' width='200' height='15' />
            <rect x='263' y='330' rx='10' ry='10' width='220' height='15' />
            <rect x='263' y='370' rx='10' ry='10' width='230' height='15' />
            <rect x='263' y='410' rx='10' ry='10' width='240' height='15' />
            <rect x='263' y='450' rx='10' ry='10' width='210' height='15' />
            <rect x='263' y='490' rx='10' ry='10' width='200' height='15' />

            <rect x='10' y='250' rx='10' ry='10' width='240' height='15' />
            <rect x='10' y='290' rx='10' ry='10' width='230' height='15' />
            <rect x='10' y='330' rx='10' ry='10' width='200' height='15' />
            <rect x='10' y='370' rx='10' ry='10' width='200' height='15' />
            <rect x='10' y='410' rx='10' ry='10' width='220' height='15' />
            <rect x='10' y='450' rx='10' ry='10' width='230' height='15' />
            <rect x='10' y='490' rx='10' ry='10' width='200' height='15' />
          </ContentLoader>
        )
      ) : (
        <ContentLoader
          speed={2}
          width={1366}
          height={1600}
          viewBox='0 0 1366 1600'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <rect x='10' y='20' rx='10' ry='10' width='336' height='160' />
          <rect x='350' y='20' rx='10' ry='10' width='336' height='160' />
          <rect x='690' y='20' rx='10' ry='10' width='336' height='160' />
          <rect x='1030' y='20' rx='10' ry='10' width='336' height='160' />

          <rect x='30' y='200' rx='10' ry='10' width='300' height='20' />
          <rect x='10' y='280' rx='10' ry='10' width='312' height='20' />
          <rect x='10' y='320' rx='10' ry='10' width='338' height='20' />
          <rect x='10' y='360' rx='10' ry='10' width='316' height='20' />
          <rect x='10' y='400' rx='10' ry='10' width='306' height='20' />
          <rect x='10' y='440' rx='10' ry='10' width='326' height='20' />
          <rect x='10' y='480' rx='10' ry='10' width='306' height='20' />


          <rect x='370' y='200' rx='10' ry='10' width='300' height='20' />
          <rect x='350' y='280' rx='10' ry='10' width='316' height='20' />
          <rect x='350' y='320' rx='10' ry='10' width='306' height='20' />
          <rect x='350' y='360' rx='10' ry='10' width='306' height='20' />
          <rect x='350' y='400' rx='10' ry='10' width='326' height='20' />
          <rect x='350' y='440' rx='10' ry='10' width='316' height='20' />
          <rect x='350' y='480' rx='10' ry='10' width='306' height='20' />


          <rect x='710' y='200' rx='10' ry='10' width='300' height='20' />
          <rect x='690' y='280' rx='10' ry='10' width='306' height='20' />
          <rect x='690' y='320' rx='10' ry='10' width='316' height='20' />
          <rect x='690' y='360' rx='10' ry='10' width='326' height='20' />
          <rect x='690' y='400' rx='10' ry='10' width='306' height='20' />
          <rect x='690' y='440' rx='10' ry='10' width='336' height='20' />
          <rect x='690' y='480' rx='10' ry='10' width='316' height='20' />

          <rect x='1045' y='200' rx='10' ry='10' width='300' height='20' />
          <rect x='1030' y='280' rx='10' ry='10' width='306' height='20' />
          <rect x='1030' y='320' rx='10' ry='10' width='306' height='20' />
          <rect x='1030' y='360' rx='10' ry='10' width='336' height='20' />
          <rect x='1030' y='400' rx='10' ry='10' width='326' height='20' />
          <rect x='1030' y='440' rx='10' ry='10' width='316' height='20' />
          <rect x='1030' y='480' rx='10' ry='10' width='316' height='20' />
        </ContentLoader>
      )}
    </div>
  )
}
