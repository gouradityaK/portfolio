import ContactForm from '../components/contact-form'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-indigo-600">Touch</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Havee a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <span>📧</span>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">gouraditya2002@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <span>📱</span>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+918485899908</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <span>📍</span>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">Nagpur, Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-indigo-100 transition-colors">
                  [LI]
                </a>
                <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-indigo-100 transition-colors">
                  [GH]
                </a>
                <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-indigo-100 transition-colors">
                  [TW]
                </a>
                <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-indigo-100 transition-colors">
                  [IG]
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}