"use client"
function FormHeading({heading,align}:{heading:string,align?:string}) {
  return (
    <div className={`pt-7 ${align?align:'text-center'}`}>
        <h4 className="text-3xl font-semibold text-gray-900">{heading}</h4>
    </div>
  )
}

export default FormHeading