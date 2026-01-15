"use client"

import { Section, Container } from "@/components/ui/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Home, Building2, Key, AppWindow, Flame, CheckCircle2, Phone, Truck, Sofa, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const services = [
    {
        title: "Carpet Cleaners Insurance",
        description: "If you run a carpet cleaning business then you will need an insurance policy that pays claims for any damage you may cause to the carpets you clean. Whether that damage is caused by discolouration, shrinkage or general damage, you need cover for damage to property worked upon and treatment risks, which are automatically covered by our policy.",
        icon: Sparkles,
        color: "text-purple-500",
        bg: "bg-purple-50",
        image: "/service-carpet.png"
    },
    {
        title: "Domestic Cleaners Insurance",
        description: "When you are cleaning in a customers' property you are legally liable for any damage you cause. Not all insurance policies cover you for the damage you cause to a customer's property. But our policy does. So if you run a domestic cleaning business you need to contact us to get the cover you need, which also includes keyholder cover, should you lose any of your customers' keys.",
        icon: Home,
        color: "text-blue-500",
        bg: "bg-blue-50",
        image: "/service-domestic.png"
    },
    {
        title: "Contract Cleaners Insurance",
        description: "If you run a contract cleaning business and need cover for the work you do in customer's premises then we can help. Whether you work in shopping centres, nursing homes or any other type of commercial premises then we can help you arrange public and employers liability Insurance with specialist covers that most insurers exclude as standard.",
        icon: Building2,
        color: "text-indigo-500",
        bg: "bg-indigo-50",
        image: "/service-contract.png"
    },
    {
        title: "End of Tenancy Cleaners Insurance",
        description: "When you are undertaking an end of tenancy cleaning job, will your current insurance policy pay any claims for damage that you may cause to the property you are cleaning? Probably not. So speak to us here at polished insurance to ensure you have the correct cover for your cleaning work.",
        icon: Key,
        color: "text-orange-500",
        bg: "bg-orange-50",
        image: "/service-tenancy.png"
    },
    {
        title: "Office Cleaners Insurance",
        description: "When you operate an office cleaning business, your customers are very important to you, and we understand that. So in the event of an incident occurring that causes damage to your customers' property, you need an insurer that will pay those claims and maintain your excellent reputation with your customer. Our policy is underwritten by Zurich, one of the world's leading insurance companies, giving you complete peace of mind should you need to make a claim.",
        icon: CheckCircle2,
        color: "text-teal-500",
        bg: "bg-teal-50",
        image: "/service-office.png"
    },
    {
        title: "Window Cleaners Insurance",
        description: "As a window cleaner you may get customer's who accuse you of scratching their new French doors or their recently built conservatory roof. Without having an insurance policy that covers you for damage to the glass you would have to defend yourself at your expense. Do you have the money to pay a solicitor to do that? By having cover with polished insurance your claim will be dealt with whether you were at fault or not and if there was no proof of any damage caused by you, then Zurich will defend your position. Absolute peace of mind from just £15 per month.",
        icon: AppWindow,
        color: "text-cyan-500",
        bg: "bg-cyan-50",
        image: "/service-window.png"
    },
    {
        title: "Oven Cleaners Insurance",
        description: "If you run an oven cleaning business then you will want to be sure that if you damage a customer's oven when cleaning it that your insurer will pay for the damage you caused. Well, if you are insured with us here at polished insurance then our insurer, Zurich will provide that cover. Not all policies will cover the damage you cause whilst cleaning, whether that damage is caused to an oven, a kitchen worktop or a newly tiled floor. So make sure you have the best cover you can by getting a quote from polished insurance.",
        icon: Flame,
        color: "text-red-500",
        bg: "bg-red-50",
        image: "/service-oven.png"
    },
    {
        title: "Driveway Cleaners Insurance",
        description: "Do you clean driveways, patios or communal areas using a power washer? Does your current insurer cover any damage that the water may cause? Or do they limit the pressure you can use to something like 100 bar? If your insurance for your driveway cleaning business with polished insurance you will have peace of mind that your business is fully protected from the risks of damaging a customer's property that could cost you thousands of pounds to rectify.",
        icon: Truck,
        color: "text-amber-600",
        bg: "bg-amber-50",
        image: "/service-driveway.png"
    },
    {
        title: "Upholstery Cleaners Insurance",
        description: "If you run an upholstery cleaning business then you will need an insurance policy that pays claims for any damage you may cause to the sofas, curtains or other soft furnishings that you clean. Whether that damage is caused by discolouration or just general damage, you need cover for damage to property worked upon and treatment risks, which are automatically covered by our policy.",
        icon: Sofa,
        color: "text-pink-500",
        bg: "bg-pink-50",
        image: "/service-upholstery.png"
    }
]

const MotionButton = motion(Button)

export function Services() {
    return (
        <Section className="bg-slate-50" id="services">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Comprehensive Cover for Every Cleaner
                    </h2>
                    <p className="text-slate-600 text-xl leading-relaxed">
                        We understand the cleaning industry. Our Zurich-backed policies provide the specific protection your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -12 }}
                        >
                            <Card className="h-full transition-all duration-300 border-none shadow-lg overflow-hidden group bg-white flex flex-col relative z-0 hover:shadow-2xl">
                                <div className="relative h-64 w-full overflow-hidden shrink-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                                    <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center backdrop-blur-md bg-white/95 shadow-xl border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className={`w-6 h-6 ${service.color}`} />
                                    </div>
                                    <div className="absolute bottom-4 left-6 right-6">
                                        <h3 className="text-2xl font-bold text-white drop-shadow-md leading-tight">{service.title}</h3>
                                    </div>
                                </div>
                                <CardContent className="p-8 flex flex-col h-full bg-white grow relative">
                                    <p className="text-slate-600 leading-7 text-base mb-8 grow">
                                        {service.description}
                                    </p>
                                    <div className="mt-auto pt-4 relative z-10 w-full">
                                        <motion.a
                                            href="https://alliedinsurance.schemeserve.com/GetQuote/questions.aspx?SchemeId=7148&NewClient=true"
                                            className="w-full bg-[#FF9900] hover:bg-[#ff8800] text-white font-bold text-lg h-14 rounded-full shadow-lg shadow-orange-500/20 transition-all duration-300 border-none relative overflow-hidden flex items-center justify-center cursor-pointer"
                                            initial="initial"
                                            whileHover="hover"
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <motion.div
                                                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                                variants={{
                                                    initial: { x: "-100%" },
                                                    hover: { x: "100%", transition: { duration: 1, repeat: Infinity, ease: "linear" } }
                                                }}
                                            />
                                            <span className="relative flex items-center justify-center gap-2">
                                                Get Your Quote Online
                                                <motion.div
                                                    variants={{
                                                        initial: { x: 0 },
                                                        hover: { x: 4 }
                                                    }}
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </motion.div>
                                            </span>
                                        </motion.a>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
