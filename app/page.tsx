import Link from "next/link"
import Image from "next/image"
import { Instagram, MessageCircle, Music, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function BonivibeLinks() {
  const links = [
    {
      title: "WhatsApp/Catálogo",
      description: "Contáctanos directamente",
      url: "https://l.instagram.com/?u=http%3A%2F%2Fwa.me%2F5493815758322%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAafJ9Il09ad7DgAF1zi_9oQ4ZkTyUUoleoE3rWH_t14L-URZwdwrLLKqqZz57g_aem_gzP6p_GOlxNQB6bI1CQ0qw&e=AT1_N3O3D3rdU4QwtKsKDzXSrfDkAui2t3XjUBebbI1PdDrJEuoZAm88hBlUBxWzW6Dxjl3oZ55T1aHDjRXArQWEvXBcA8YzDeMb6mA",
      icon: MessageCircle,
    },
    {
      title: "Instagram",
      description: "@boni.vibe",
      url: "https://www.instagram.com/boni.vibe/",
      icon: Instagram,
    },
    {
      title: "TikTok",
      description: "@bonivibe.indumenta",
      url: "https://www.tiktok.com/@bonivibe.indumenta",
      icon: Music,
    },

  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Full Width Banner with Logo Overlay */}
      <div className="relative w-full">
        <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
          <Image
            src="/banner-bonivibe.png"
            alt="Bonivibe - Trendy Fashion Banner"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Logo positioned at bottom center of banner */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full p-2 shadow-lg border-4 border-white">
            <Image
              src="/logo-bonivibe.png"
              alt="Bonivibe Logo"
              width={128}
              height={128}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center p-4 pt-16 md:pt-20">
        <div className="w-full max-w-md mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-black mb-2">bonivibe</h1>
          </div>

          {/* Links */}
          <div className="space-y-4">
            {links.map((link, index) => {
              const IconComponent = link.icon
              return (
                <Card
                  key={index}
                  className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group"
                >
                  <CardContent className="p-0">
                    <Link href={link.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                      <Button
                        variant="ghost"
                        className="w-full h-auto p-6 justify-start text-left hover:bg-transparent group-hover:text-white"
                      >
                        <div className="flex items-center w-full">
                          <div className="flex-shrink-0 mr-4">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-grow">
                            <div className="font-semibold text-lg">{link.title}</div>
                            <div className="text-sm opacity-70">{link.description}</div>
                          </div>
                        </div>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Footer */}
          <div className="text-center mt-8 space-y-2">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} bonivibe - Todos los derechos reservados
            </p>
            <div className="flex items-center justify-center gap-1 text-xs text-gray-400">
              <span>Developed by</span>
              <Link
                href="https://www.linkedin.com/in/luciano-bonilla-579463323/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-black transition-colors duration-200"
              >
                <Linkedin className="w-3 h-3" />
                <span className="font-medium">Luciano Bonilla</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
