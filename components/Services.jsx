import {GanttChartSquare, Blocks, Gem} from 'lucide-react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

const serviceData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
        title: 'UI/UX Design',
        desription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8}/>,
        title: 'Front-end Developer',
        desription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        icon: <Gem size={72} strokeWidth={0.8}/>,
        title: 'Back-end Developer',
        desription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
]

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
        <div className="container mx-auto">
            <h2 className='sec-title mb-12 xl:mb-24 text-center mx-auto'>My Services</h2>
            {/* grid Items */}
            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24'>
                {serviceData.map((item, index) => {
                    return(
                        <Card className='w-full max-w-[420px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                            <CardHeader className='text-primary absolute -top-[60px]'>
                                <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>{item.icon}</div>
                            </CardHeader>
                            <CardContent className='text-center'>
                                <CardTitle>{item.title}</CardTitle>
                                <CardDescription></CardDescription>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Services