import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Heart, Truck, Shield } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About Craft & Style</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We are passionate about bringing you the finest handcrafted products from talented artisans around the world. 
              Each piece tells a story of dedication, skill, and artistic vision.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2020, Craft & Style began as a small passion project to connect skilled artisans 
                  with people who appreciate quality craftsmanship. We believe that handmade products carry 
                  a special energy and uniqueness that mass-produced items simply cannot match.
                </p>
                <p className="text-gray-600 mb-4">
                  Today, we work with over 100 artisans from around the globe, each bringing their unique 
                  cultural heritage and artistic vision to our collection. From traditional techniques 
                  passed down through generations to innovative modern designs, we celebrate the full 
                  spectrum of human creativity.
                </p>
                <p className="text-gray-600">
                  Every purchase you make supports these talented creators and helps preserve traditional 
                  crafts for future generations.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <img 
                  src="/artisan-craft.png" 
                  alt="Artisan at work" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Quality First</h3>
                  <p className="text-sm text-gray-600">
                    We carefully select only the finest materials and work with skilled artisans who take pride in their craft.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Made with Love</h3>
                  <p className="text-sm text-gray-600">
                    Every product is handcrafted with passion and attention to detail, making each piece truly unique.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">
                    We ensure your handcrafted treasures reach you safely and quickly with our reliable delivery service.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Secure Shopping</h3>
                  <p className="text-sm text-gray-600">
                    Shop with confidence knowing your personal information and payments are protected.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <img 
                    src="/professional-woman-smiling.png" 
                    alt="Sarah Johnson" 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold mb-1">Sarah Johnson</h3>
                  <p className="text-sm text-gray-600 mb-2">Founder & CEO</p>
                  <p className="text-sm text-gray-600">
                    Passionate about connecting artisans with customers who appreciate quality craftsmanship.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <img 
                    src="/professional-man-smiling.png" 
                    alt="Michael Chen" 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold mb-1">Michael Chen</h3>
                  <p className="text-sm text-gray-600 mb-2">Head of Artisan Relations</p>
                  <p className="text-sm text-gray-600">
                    Works directly with artisans to ensure quality standards and fair partnerships.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <img 
                    src="/professional-woman-glasses.png" 
                    alt="Emma Rodriguez" 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold mb-1">Emma Rodriguez</h3>
                  <p className="text-sm text-gray-600 mb-2">Customer Experience Manager</p>
                  <p className="text-sm text-gray-600">
                    Ensures every customer has an exceptional experience from browsing to delivery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
