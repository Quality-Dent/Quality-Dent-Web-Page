import {Card, CardContent, CardDescription, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {HugeiconsIcon} from "@hugeicons/react";
import {CheckmarkCircle02Icon, ArrowRight01Icon} from "@hugeicons/core-free-icons";
import Image from "next/image";

export default function AboutUsSection(){
    return (
        <section className="py-20 bg-[var(--surface-light)]" id="nosotros">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-[var(--primary)]/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--secondary)]/10 rounded-full blur-2xl"></div>
                        <div className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px] overflow-hidden">
                            <Image src={`/facade.jpg`} alt={`Quality Dent Entrance`} quality={100} fill className={`object-cover scale-125`}/>
                        </div>
                        <Card className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-lg max-w-[280px] ring-0">
                            <CardContent className="p-0">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="flex -space-x-4">
                                        <img
                                            alt="Patient"
                                            className="w-10 h-10 rounded-full border-2 border-white"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1nUQI-NZctIc9eEmeVp2_xIoTw5uURVFrS_NnKqn55OjTodfaET1ki-dqhctBOMR4y1hk9QdQl5jAy0gFYBCfcAegSeaelLoPZZZ-augb2JIb3ObUc-8SX3RS7Hx5vdiORRJ340QJf3jnDDw0Aot4QbK0FAdEEsMqO5WLrQNlUApOPhlLDpJSXqW06CCyfcZpX4HY1QXghRDzXVPwn0QAE5WbiSg96i1W7iutII1ssvc36m4G3IKKTfEbSw-QJMKCPDKUixhH"
                                        />
                                        <img
                                            alt="Patient"
                                            className="w-10 h-10 rounded-full border-2 border-white"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9dtaOGmav2jh0SfcgGJ3lnxgos3yZXsIxzWWe1it0JK3iOmre9slqBs3-UZGxPHAoyoFgzvzMkGpMoM9Bh63hHY9-3KxBi506ZJWajSrzeZo5d-G2iBRt7AvoRGAMgwFrVAz4yuJAQ14di7PYfxfjS3-ml71Zfuw6C6OP7loDcDP1m27MfURSaMgOvmBAceXsmb3y3S_C-xqE0W8k6wklxtpeypz_ZA0jq-8ISIPQcaGBT43rKD9HMHM-j6jUy95Azcd6Ed7K"
                                        />
                                        <img
                                            alt="Patient"
                                            className="w-10 h-10 rounded-full border-2 border-white"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWsJe7FC0CgrblACKaRfVXaGHHdknJ3JsHcrGvY_oSc_WYxXMzTl6RH4Y6cCDtx5oCFqDWBx54lwklRArb8Twbjrna2GheGJNIMvdEXlJt7GxKsHv-_7LL-32zZcuxnUFVS1s7TCCp15SkyCUV-Y2Rb_1TA6VWIofCXoPyIjQyQ_PBQh4HDf-FxZpoLaISkwmgSaxuf05xUL5t-ldrHPKRJXM-WJczAHqGcpwbVd2FVf9gniOHuic99Rx5oM97zptCaO54ZhG7"
                                        />
                                    </div>
                                    <span className="text-[var(--secondary)] font-bold text-sm">
											+2k Pacientes
										</span>
                                </div>
                                <p className="text-xs text-gray-500">
                                    Pacientes satisfechos que recuperaron su sonrisa con
                                    nostros.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="w-full lg:w-1/2">
							<span className="text-[var(--primary)] font-bold tracking-wider text-sm uppercase mb-2 block">
								Sobre Nosotros
							</span>
                        <h2 className="text-3xl md:text-4xl font-black text-[var(--secondary)] mb-6 leading-tight">
                            Compromiso con tu Salud Dental en San Miguel
                        </h2>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            Con más de 20 años sirviendo a la comunidad de San Miguel y
                            Lima, Quality Dent se dedica a ofrecer tratamientos dentales de
                            alta calidad. Nuestro equipo de especialistas se mantiene a la
                            vanguardia de las técnicas odontológicas.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Entendemos que visitar al dentista puede generar ansiedad. Por
                            eso, hemos diseñado nuestra clínica para ser un espacio tranquilo
                            y acogedor, donde tu comodidad es nuestra prioridad desde el
                            primer momento.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3">
                                <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} className="text-[var(--primary)]" />
                                <span className="text-gray-700 font-medium">
										Especialistas certificados
									</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} className="text-[var(--primary)]" />
                                <span className="text-gray-700 font-medium">
										Materiales de alta durabilidad
									</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} className="text-[var(--primary)]" />
                                <span className="text-gray-700 font-medium">
										Protocolos estrictos de bioseguridad
									</span>
                            </li>
                        </ul>
                        <a
                            className="inline-flex items-center gap-2 text-[var(--primary)] font-bold hover:text-[var(--secondary)] transition-colors group"
                            href="#contacto"
                        >
                            Conoce más sobre nosotros
                            <HugeiconsIcon icon={ArrowRight01Icon} size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}