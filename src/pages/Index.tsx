import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ClientsSection from "@/components/home/ClientsSection";
import TreasurySection from "@/components/home/TreasurySection";
import ForexSection from "@/components/home/ForexSection";
import MetricsSection from "@/components/home/MetricsSection";
import APISection from "@/components/home/APISection";
import DashboardSection from "@/components/home/DashboardSection";
import GlobalHubSection from "@/components/home/GlobalHubSection";
import VolumeSection from "@/components/home/VolumeSection";
import ReportsSection from "@/components/home/ReportsSection";
import SecuritySection from "@/components/home/SecuritySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ClientsSection />
    <TreasurySection />
    <ForexSection />
    <MetricsSection />
    <APISection />
    <DashboardSection />
    <GlobalHubSection />
    <VolumeSection />
    <ReportsSection />
    <SecuritySection />
    <TestimonialsSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
