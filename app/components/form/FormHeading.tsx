"use client"
function FormHeading({heading}:{heading:string}) {
  return (
    <div className="pt-7 text-center">
        <h4 className="text-3xl font-semibold text-gray-900">{heading}</h4>
    </div>
  )
}

export default FormHeading