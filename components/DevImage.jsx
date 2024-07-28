import Image from "next/image"


const DevImage = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <div className="h-[150px]">
      <Image  src={imgSrc} fill priority alt=""/>
      </div>
    </div>
  )
}

export default DevImage