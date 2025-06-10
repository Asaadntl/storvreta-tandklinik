export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Storvreta Tandklinik. Alla rättigheter förbehållna.</p>
        <p className="text-sm mt-1">
          Skogsvallsvägen 7, Storvreta · 018-10 80 01 · storvretatandklinik@gmail.com
        </p>
      </div>
    </footer>
  );
}
