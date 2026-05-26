import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Facebook, Instagram, Youtube, TrendingUp } from 'lucide-react';

export default function ChineseGoGoWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="w-full bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-red-600">Chinese GoGo</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-red-600 transition">Home</a>
              <a href="#courses" className="text-gray-700 hover:text-red-600 transition">Courses</a>
              <a href="#pricing" className="text-gray-700 hover:text-red-600 transition">Pricing</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition">Contact</a>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-red-600">Home</a>
              <a href="#courses" className="block py-2 text-gray-700 hover:text-red-600">Courses</a>
              <a href="#pricing" className="block py-2 text-gray-700 hover:text-red-600">Pricing</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-red-600">About</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-red-600">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn Chinese the <span className="text-red-600">Fun Way</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Master Mandarin from absolute beginner to advanced with engaging video lessons, interactive quizzes, and real-world practice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              Start Free Course
            </button>
            <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition">
              View All Courses
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">10K+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Video Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">6</div>
              <div className="text-gray-600">HSK Levels</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bundled Courses */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Bundled Courses</h2>
          <p className="text-center text-gray-600 mb-12">Get lifetime access to all course materials</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Ultimate Bundle */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="bg-gray-200 h-48 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-500">Course Cover</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Ultimate Bundle</h3>
              <p className="text-gray-600 mb-6">Master Mandarin from beginner to advanced with lifetime access to all our courses, materials, and updates.</p>
              <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-semibold">
                Enroll Now
              </button>
            </div>

            {/* HSK 1-4 Bundle */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="bg-gray-200 h-48 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-500">Course Cover</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">HSK 1-4 Bundle</h3>
              <p className="text-gray-600 mb-6">Perfect for beginners to intermediate learners building up toward everyday fluency and practical communication.</p>
              <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-semibold">
                Enroll Now
              </button>
            </div>

            {/* HSK 5-6 Bundle */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="bg-gray-200 h-48 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-500">Course Cover</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">HSK 5-6 Bundle</h3>
              <p className="text-gray-600 mb-6">Designed for advanced learners aiming to reach professional fluency and master complex topics in Chinese.</p>
              <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-semibold">
                Enroll Now
              </button>
            </div>
          </div>

          {/* Individual Courses */}
          <h3 className="text-3xl font-bold mb-8">...or buy each course individually</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['HSK 1 Beginner', 'HSK 2 Upper Beginner', 'HSK 3 Intermediate', 'HSK 4 Upper Intermediate', 'HSK 5 Advanced', 'HSK 6 Advanced'].map((course, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <div className="bg-gray-200 h-32 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Course Cover</span>
                </div>
                <h4 className="text-lg font-semibold mb-3">{course} Course</h4>
                <button className="w-full border border-red-600 text-red-600 py-2 rounded-lg hover:bg-red-50 transition font-semibold">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Free Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Introduction to Chinese', desc: 'Learn the 100 most essential words through engaging TV drama scenes' },
              { title: 'Pronunciation Course', desc: 'Master pinyin and Mandarin phonetics from the ground up' },
              { title: 'Slow Chinese Listening', desc: 'Supplement your textbook learning with real-world Chinese listening' },
              { title: 'Learn Chinese with Songs', desc: 'Explore and learn popular Chinese songs while improving listening skills' },
              { title: 'Learn Chinese with Poems', desc: 'Master famous Tang Dynasty poems and understand Chinese classical literature' },
              { title: 'Chinese Grammar Essentials', desc: 'Understand the core grammar structures that power everyday Chinese' }
            ].map((course, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.desc}</p>
                <button className="text-red-600 font-semibold hover:text-red-700 transition">
                  Enroll Free →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 mb-12">All courses include lifetime access and lifetime updates</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Individual Course', price: '$35', desc: 'Single HSK level course' },
              { name: 'Beginner Bundle', price: '$120', desc: 'HSK 1-4 all courses' },
              { name: 'Ultimate Bundle', price: '$250', desc: 'HSK 1-6 + all extras' }
            ].map((plan, idx) => (
              <div key={idx} className={`rounded-lg p-8 border-2 transition ${
                idx === 2 ? 'border-red-600 bg-red-50' : 'border-gray-200 bg-white'
              }`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.desc}</p>
                <div className="text-5xl font-bold text-red-600 mb-8">{plan.price}</div>
                <button className={`w-full py-3 rounded-lg font-semibold transition ${
                  idx === 2 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'border border-red-600 text-red-600 hover:bg-red-50'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Student Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Dmitry V.', score: 'HSK 5: 262/300', story: 'Used Chinese GoGo as the foundation of my study process. Completed 18 lessons in 25 days and improved my HSK score by 65 points!' },
              { name: 'Sarhata', score: 'HSK 4: 287/300', story: 'Started studying Chinese 8 months ago. The detailed videos helped me reach advanced level Chinese in less than a year.' },
              { name: 'Carla G.', score: 'HSK 3: 296/300', story: 'Feeling lost with my Chinese studies until I found Chinese GoGo. Now I feel confident with grammar and listening skills.' },
              { name: 'Jonathan T.', score: 'HSK 2: 200/200', story: 'The videos are succinct yet thorough, and very funny! Learning Chinese has become so much more enjoyable.' }
            ].map((student, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 mb-4 italic">"{student.story}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{student.name}</div>
                  <div className="text-red-600 text-sm">{student.score}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Get Your Free Study Guide</h2>
          <p className="text-gray-600 mb-8">
            Feeling lost with no guidance? Unlock our 16-page PDF guide packed with level-by-level roadmaps, time estimates, key resources, and strategies to reach fluency.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              required
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition whitespace-nowrap"
            >
              Get Free Guide
            </button>
          </form>
          
          {subscribed && (
            <p className="text-green-600 mt-4">Thank you! Check your email for the free guide.</p>
          )}
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">Follow Us</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join our community on social media for daily Chinese learning tips, culture insights, and language motivation.
          </p>
          
          <div className="flex justify-center gap-8 flex-wrap mb-12">
            <a href="https://tiktok.com/@chinesegogo6" className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition">
              <TrendingUp size={24} />
              <span className="font-semibold">@chinesegogo6</span>
            </a>
            <a href="https://youtube.com/@chinesegogo" className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition">
              <Youtube size={24} />
              <span className="font-semibold">@chinesegogo</span>
            </a>
          </div>

          <p className="text-gray-600 text-sm mb-8">
            Coming soon: Facebook and Instagram. Subscribe to stay updated!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#courses" className="hover:text-white transition">Courses</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Free Courses</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://tiktok.com/@chinesegogo6" className="hover:text-white transition">TikTok</a></li>
                <li><a href="https://youtube.com/@chinesegogo" className="hover:text-white transition">YouTube</a></li>
                <li><a href="mailto:sampsonxichen@gmail.com" className="hover:text-white transition">Email</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Chinese GoGo. All rights reserved. Master Mandarin, Have Fun Doing It.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
