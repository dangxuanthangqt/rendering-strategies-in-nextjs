import React from 'react'
interface TimeCardProps {
    title?: string,
    timestamp?: string,
    description?: string
}

function TimeCard({ title, timestamp,description }: TimeCardProps) {
    console.log(title, timestamp, description)
    return (
        <div className="bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-1 sm:px-1 ">
            <div className="max-w-7xl mx-auto">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                        <div className="space-y-2">
                            <h6 className="text-3xl font-bold text-gray-900 sm:text-3xl">{title}</h6>
                            <p className="text-pink-700">{timestamp}</p>
                            <p className="text-gray-900 mt-2">{description}</p>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}
export default TimeCard