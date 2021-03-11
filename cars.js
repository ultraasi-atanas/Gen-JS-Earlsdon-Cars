const carsData = [
    { make: "Alfa Romeo", model: "33", fromYear: 1983, toYear: 1995 },
    { make: "Alfa Romeo", model: "75", fromYear: 1985, toYear: 1992 },
    { make: "Alfa Romeo", model: "155", fromYear: 1992, toYear: 1997 },
    { make: "Alfa Romeo", model: "156", fromYear: 1997, toYear: 2005 },
    { make: "Alfa Romeo", model: "33 Stradale", fromYear: 1967, toYear: 1967 },
    { make: "Alfa Romeo", model: "Alfasud", fromYear: 1972, toYear: 1989 },
    { make: "Alfa Romeo", model: "Arna", fromYear: 1983, toYear: 1987 },
    { make: "Alfa Romeo", model: "Brera", fromYear: 2005, toYear: 2010 },
    { make: "Alfa Romeo", model: "GT", fromYear: 2003, toYear: 2010 },
    { make: "Alfa Romeo", model: "Montreal", fromYear: 1970, toYear: 1977 },
    { make: "Alfa Romeo", model: "Spider", fromYear: 1966, toYear: 1993 },
    { make: "Alpine", model: "A106", fromYear: 1955, toYear: 1961 },
    {
      make: "Alpine",
      model: "A108/Willys Interlagos",
      fromYear: 1958,
      toYear: 1965,
    },
    { make: "Alpine", model: "A110", fromYear: 1961, toYear: 1977 },
    { make: "Alpine", model: "A310", fromYear: 1971, toYear: 1984 },
    { make: "AMC", model: "Gremlin", fromYear: 1970, toYear: 1978 },
    { make: "AMC", model: "Hornet", fromYear: 1970, toYear: 1977 },
    { make: "Audi", model: "80 and 90", fromYear: 1972, toYear: 1996 },
    { make: "Audi", model: "A1", fromYear: 2010, toYear: "present" },
    { make: "Audi", model: "A3", fromYear: 1996, toYear: "present" },
    { make: "Audi", model: "A4", fromYear: 1994, toYear: "present" },
    { make: "Audi", model: "Coupé/Quattro", fromYear: 1980, toYear: 1996 },
    { make: "Audi", model: "R8", fromYear: 2007, toYear: "present" },
    { make: "Austin", model: "Allegro", fromYear: 1973, toYear: 1983 },
    { make: "Austin", model: "Maestro", fromYear: 1983, toYear: 1994 },
    { make: "Austin", model: "Metro", fromYear: 1980, toYear: 1998 },
    { make: "Austin", model: "Montego", fromYear: 1984, toYear: 1994 },
    { make: "Austin-Healey", model: "Sprite", fromYear: 1958, toYear: 1971 },
    { make: "BMW", model: "2000C and 2000CS", fromYear: 1965, toYear: 1969 },
    { make: "BMW", model: "3 Series", fromYear: 1975, toYear: "present" },
    { make: "BMW", model: "3200 CS", fromYear: 1962, toYear: 1965 },
    { make: "BMW", model: "5 Series", fromYear: 1972, toYear: "present" },
    { make: "BMW", model: "503", fromYear: 1956, toYear: 1959 },
    { make: "BMW", model: "507", fromYear: 1956, toYear: 1959 },
    { make: "BMW", model: "8 Series", fromYear: 1989, toYear: 1999 },
    { make: "BMW", model: "CS", fromYear: 1968, toYear: 1975 },
    { make: "BMW", model: "i3", fromYear: 2013, toYear: "present" },
    { make: "BMW", model: "i8", fromYear: 2014, toYear: "present" },
    { make: "BMW", model: "M1", fromYear: 1978, toYear: 1981 },
    { make: "BMW", model: "New Class", fromYear: 1962, toYear: 1976 },
    { make: "BMW", model: "X5", fromYear: 1999, toYear: "present" },
    { make: "BMW", model: "Z1", fromYear: 1989, toYear: 1991 },
    { make: "BMW", model: "Z8", fromYear: 1999, toYear: 2003 },
    { make: "Chevrolet", model: "Camaro", fromYear: 1967, toYear: 2002 },
    { make: "Chevrolet", model: "Caprice", fromYear: 1966, toYear: 1996 },
    { make: "Chevrolet", model: "Cavalier", fromYear: 1982, toYear: 2005 },
    { make: "Chevrolet", model: "Citation", fromYear: 1980, toYear: 1985 },
    { make: "Chevrolet", model: "Corvair", fromYear: 1960, toYear: 1969 },
    { make: "Chevrolet", model: "Corvette", fromYear: 1953, toYear: "present" },
    { make: "Chevrolet", model: "Cruze", fromYear: 2008, toYear: "present" },
    { make: "Chevrolet", model: "Impala", fromYear: 1958, toYear: 1985 },
    { make: "Chevrolet", model: "Malibu", fromYear: 1964, toYear: 1983 },
    { make: "Chevrolet", model: "Monza", fromYear: 1975, toYear: 1980 },
    { make: "Chevrolet", model: "Opala", fromYear: 1968, toYear: 1992 },
    { make: "Chevrolet", model: "Vega", fromYear: 1971, toYear: 1977 },
    { make: "Chevrolet", model: "Volt", fromYear: 2010, toYear: 2019 },
    { make: "Chrysler", model: "minivans", fromYear: 1984, toYear: "present" },
    { make: "Chrysler", model: "Newport", fromYear: 1961, toYear: 1981 },
    { make: "Chrysler", model: "TC by Maserati", fromYear: 1989, toYear: 1991 },
    {
      make: "Chrysler",
      model: "Town & Country",
      fromYear: 1990,
      toYear: "present",
    },
    { make: "Citroën", model: "DS", fromYear: 1955, toYear: 1976 },
    { make: "Ferrari", model: "212 Inter", fromYear: 1951, toYear: 1952 },
    { make: "Ferrari", model: "250 GT 2+2", fromYear: 1960, toYear: 1963 },
    {
      make: "Ferrari",
      model: "250 GT Berlinetta Tour de France",
      fromYear: 1956,
      toYear: 1959,
    },
    {
      make: "Ferrari",
      model: "250 GT Berlinetta SWB",
      fromYear: 1959,
      toYear: 1963,
    },
    { make: "Ferrari", model: "250 GT Coupé", fromYear: 1954, toYear: 1960 },
    { make: "Ferrari", model: "250 GT Lusso", fromYear: 1962, toYear: 1964 },
    { make: "Ferrari", model: "250 GTO", fromYear: 1962, toYear: 1964 },
    { make: "Ferrari", model: "250 LM", fromYear: 1964, toYear: 1965 },
    { make: "Ferrari", model: "250 MM", fromYear: 1952, toYear: 1953 },
    { make: "Ferrari", model: "275", fromYear: 1964, toYear: 1968 },
    { make: "Ferrari", model: "288 GTO", fromYear: 1984, toYear: 1987 },
    { make: "Ferrari", model: "308 GTB and GTS", fromYear: 1975, toYear: 1985 },
    { make: "Ferrari", model: "333 SP", fromYear: 1994, toYear: 2001 },
    { make: "Ferrari", model: "348", fromYear: 1989, toYear: 1995 },
    { make: "Ferrari", model: "360", fromYear: 1999, toYear: 2004 },
    {
      make: "Ferrari",
      model: "365 GTB/4 and 365 GTS/4",
      fromYear: 1968,
      toYear: 1973,
    },
    { make: "Ferrari", model: "456", fromYear: 1992, toYear: 2003 },
    { make: "Ferrari", model: "550 Maranello", fromYear: 1996, toYear: 2001 },
    { make: "Ferrari", model: "575M Maranello", fromYear: 2002, toYear: 2006 },
    { make: "Ferrari", model: "BB", fromYear: 1973, toYear: 1984 },
    { make: "Ferrari", model: "Dino", fromYear: 1966, toYear: 1980 },
    { make: "Ferrari", model: "F355", fromYear: 1994, toYear: 1999 },
    { make: "Ferrari", model: "F40", fromYear: 1987, toYear: 1993 },
    { make: "Ferrari", model: "F430", fromYear: 2004, toYear: 2009 },
    { make: "Ferrari", model: "F50", fromYear: 1995, toYear: 1997 },
    { make: "Ferrari", model: "FF", fromYear: 2011, toYear: 2016 },
    { make: "Ferrari", model: "Mondial", fromYear: 1980, toYear: 1993 },
    { make: "Ferrari", model: "Testarossa", fromYear: 1984, toYear: 1996 },
    { make: "Fiat", model: "124", fromYear: 1966, toYear: 1974 },
    { make: "Fiat", model: "126", fromYear: 1973, toYear: 2000 },
    { make: "Fiat", model: "127", fromYear: 1971, toYear: 1983 },
    { make: "Fiat", model: "131", fromYear: 1974, toYear: 1984 },
    { make: "Fiat", model: "500", fromYear: 1957, toYear: 1975 },
    { make: "Fiat", model: "Panda", fromYear: 1980, toYear: "present" },
    { make: "Fiat", model: "Punto", fromYear: 1993, toYear: "present" },
    { make: "Fiat", model: "Uno", fromYear: 1983, toYear: "present" },
    { make: "Fiat", model: "X1/9", fromYear: 1972, toYear: 1989 },
    { make: "Ford", model: "Aerostar", fromYear: 1986, toYear: 1997 },
    { make: "Ford", model: "CE14 platform", fromYear: 1981, toYear: 1990 },
    { make: "Ford", model: "Cortina", fromYear: 1962, toYear: 1982 },
    { make: "Ford", model: "Crown Victoria", fromYear: 1992, toYear: 2011 },
    { make: "Ford", model: "D186 platform", fromYear: 1986, toYear: 1995 },
    {
      make: "Ford",
      model: "Escort/(North America)",
      fromYear: 1968,
      toYear: 2003,
    },
    { make: "Ford", model: "Explorer", fromYear: 1990, toYear: "present" },
    { make: "Ford", model: "Falcon", fromYear: 1960, toYear: 2016 },
    { make: "Ford", model: "Fiesta", fromYear: 1976, toYear: 1989 },
    { make: "Ford", model: "Fiesta", fromYear: 1976, toYear: "present" },
    { make: "Ford", model: "Focus", fromYear: 1998, toYear: "present" },
    { make: "Ford", model: "F-Series", fromYear: 1948, toYear: "present" },
    {
      make: "Ford",
      model: "Granada (North America)",
      fromYear: 1975,
      toYear: 1982,
    },
    { make: "Ford", model: "GT", fromYear: 2005, toYear: 2006 },
    { make: "Ford", model: "LTD", fromYear: 1967, toYear: 1986 },
    { make: "Ford", model: "Mustang", fromYear: 1964, toYear: "present" },
    { make: "Ford", model: "Puma", fromYear: 1997, toYear: 2001 },
    { make: "Ford", model: "Ranchero", fromYear: 1957, toYear: 1979 },
    { make: "Ford", model: "Ranger", fromYear: 1983, toYear: 2011 },
    { make: "Ford", model: "Ranger (T6)", fromYear: 2011, toYear: "present" },
    { make: "Ford", model: "RS200", fromYear: 1984, toYear: 1986 },
    { make: "Ford", model: "Sierra", fromYear: 1982, toYear: 1993 },
    { make: "Ford", model: "Taurus", fromYear: 1986, toYear: 2019 },
    { make: "Ford", model: "Tempo", fromYear: 1984, toYear: 1994 },
    { make: "Ford", model: "Thunderbird", fromYear: 1955, toYear: 1997 },
    { make: "Ford", model: "Transit", fromYear: 1965, toYear: "present" },
    { make: "FSO", model: "Polonez", fromYear: 1978, toYear: 2002 },
    { make: "Honda", model: "Accord", fromYear: 1976, toYear: "present" },
    { make: "Honda", model: "Beat", fromYear: 1991, toYear: 1996 },
    { make: "Honda", model: "Civic", fromYear: 1972, toYear: "present" },
    { make: "Honda", model: "CR-V", fromYear: 1996, toYear: "present" },
    { make: "Honda", model: "Fit", fromYear: 2001, toYear: "present" },
    { make: "Honda", model: "NSX", fromYear: 1990, toYear: 2005 },
    { make: "Honda", model: "Prelude", fromYear: 1978, toYear: 2001 },
    { make: "Honda", model: "S2000", fromYear: 1999, toYear: 2009 },
    { make: "Honda", model: "S500", fromYear: 1963, toYear: 1964 },
    { make: "Honda", model: "S600", fromYear: 1964, toYear: 1966 },
    { make: "Honda", model: "S800", fromYear: 1966, toYear: 1970 },
    { make: "Hyundai", model: "Accent", fromYear: 1994, toYear: "present" },
    { make: "Hyundai", model: "Elantra", fromYear: 1990, toYear: "present" },
    { make: "Hyundai", model: "Sonata", fromYear: 1985, toYear: "present" },
    { make: "Jaguar", model: "D-Type", fromYear: 1954, toYear: 1956 },
    { make: "Jaguar", model: "E-Type", fromYear: 1961, toYear: 1974 },
    { make: "Jaguar", model: "Mark 1", fromYear: 1955, toYear: 1959 },
    { make: "Jaguar", model: "Mark 2", fromYear: 1959, toYear: 1967 },
    { make: "Jaguar", model: "XJ220", fromYear: 1992, toYear: 1994 },
    { make: "Jaguar", model: "XJS", fromYear: 1975, toYear: 1996 },
    { make: "Jaguar", model: "XK", fromYear: 1996, toYear: 2015 },
    { make: "Jaguar", model: "XK150", fromYear: 1957, toYear: 1961 },
    { make: "Jaguar", model: "X-Type", fromYear: 2001, toYear: 2009 },
    { make: "Jeep", model: "Cherokee (KL)", fromYear: 2013, toYear: "present" },
    { make: "Jeep", model: "Cherokee (XJ)", fromYear: 1984, toYear: "present" },
    { make: "Jeep", model: "Renegade", fromYear: 2014, toYear: "present" },
    { make: "Lada", model: "Riva", fromYear: 1980, toYear: 2013 },
    { make: "Lamborghini", model: "350GT", fromYear: 1964, toYear: 1966 },
    { make: "Lamborghini", model: "400GT", fromYear: 1966, toYear: 1968 },
    {
      make: "Lamborghini",
      model: "Aventador",
      fromYear: 2011,
      toYear: "present",
    },
    { make: "Lamborghini", model: "Countach", fromYear: 1974, toYear: 1990 },
    { make: "Lamborghini", model: "Diablo", fromYear: 1990, toYear: 2001 },
    { make: "Lamborghini", model: "Espada", fromYear: 1968, toYear: 1978 },
    { make: "Lamborghini", model: "Gallardo", fromYear: 2004, toYear: 2013 },
    { make: "Lamborghini", model: "Huracán", fromYear: 2014, toYear: "present" },
    { make: "Lamborghini", model: "Islero", fromYear: 1968, toYear: 1969 },
    { make: "Lamborghini", model: "Jalpa", fromYear: 1981, toYear: 1988 },
    { make: "Lamborghini", model: "Jarama", fromYear: 1970, toYear: 1976 },
    { make: "Lamborghini", model: "LM002", fromYear: 1986, toYear: 1993 },
    { make: "Lamborghini", model: "Miura", fromYear: 1966, toYear: 1972 },
    { make: "Lamborghini", model: "Murciélago", fromYear: 2001, toYear: 2010 },
    { make: "Lamborghini", model: "Reventón", fromYear: 2007, toYear: 2009 },
    { make: "Lamborghini", model: "Silhouette", fromYear: 1976, toYear: 1979 },
    { make: "Lamborghini", model: "Urraco", fromYear: 1973, toYear: 1979 },
    { make: "Lancia", model: "Dedra", fromYear: 1989, toYear: 2000 },
    { make: "Lancia", model: "Montecarlo", fromYear: 1975, toYear: 1978 },
    { make: "Lancia", model: "Stratos", fromYear: 1972, toYear: 1974 },
    { make: "Lancia", model: "Y10", fromYear: 1985, toYear: 1995 },
    { make: "Lancia", model: "Ypsilon", fromYear: 1996, toYear: "present" },
    {
      make: "Land",
      model: "Rover Range Rover",
      fromYear: 1970,
      toYear: "present",
    },
    { make: "Lexus", model: "LFA", fromYear: 2010, toYear: 2012 },
    { make: "Lincoln", model: "Town Car", fromYear: 1981, toYear: 2011 },
    { make: "Lincoln", model: "Versailles", fromYear: 1977, toYear: 1980 },
    { make: "Lotus", model: "Elise", fromYear: 1996, toYear: "present" },
    { make: "Maserati", model: "3200 GT", fromYear: 1998, toYear: 2002 },
    { make: "Maserati", model: "Biturbo", fromYear: 1981, toYear: 1994 },
    { make: "Maserati", model: "Coupé and Spyder", fromYear: 2001, toYear: 2007 },
    { make: "Maserati", model: "GranTurismo", fromYear: 2007, toYear: 2019 },
    { make: "Maserati", model: "MC12", fromYear: 2004, toYear: 2005 },
    { make: "Mazda", model: "3", fromYear: 2003, toYear: "present" },
    { make: "Mazda", model: "6", fromYear: 2002, toYear: "present" },
    { make: "Mazda", model: "Familia", fromYear: 1963, toYear: 2003 },
    { make: "Mazda", model: "MPV", fromYear: 1988, toYear: "present" },
    { make: "Mazda", model: "MX-5", fromYear: 1989, toYear: "present" },
    { make: "Mazda", model: "R360", fromYear: 1960, toYear: 1966 },
    { make: "Mazda", model: "RX-7", fromYear: 1978, toYear: 2002 },
    { make: "Mazda", model: "RX-8", fromYear: 2003, toYear: 2012 },
    { make: "McLaren", model: "12C", fromYear: 2011, toYear: 2014 },
    { make: "McLaren", model: "F1", fromYear: 1993, toYear: 1998 },
    { make: "McLaren", model: "P1", fromYear: 2013, toYear: 2015 },
    { make: "Mercedes-Benz", model: "600", fromYear: 1963, toYear: 1981 },
    {
      make: "Mercedes-Benz",
      model: "C-Class",
      fromYear: 1993,
      toYear: "present",
    },
    { make: "Mercedes-Benz", model: "CLK GTR", fromYear: 1997, toYear: 1999 },
    {
      make: "Mercedes-Benz",
      model: "S-Class",
      fromYear: 1965,
      toYear: "present",
    },
    {
      make: "Mercedes-Benz",
      model: "SL-Class",
      fromYear: 1954,
      toYear: "present",
    },
    { make: "Mercedes-Benz", model: "SLR McLaren", fromYear: 2003, toYear: 2010 },
    {
      make: "Mercedes-Benz",
      model: "Type 300 Adenauer",
      fromYear: 1951,
      toYear: 1957,
    },
    { make: "Mercedes-Benz", model: "W123", fromYear: 1975, toYear: 1986 },
    { make: "Mercedes-Benz", model: "W201", fromYear: 1983, toYear: 1993 },
    { make: "Mitsubishi", model: "Carisma", fromYear: 1995, toYear: 2004 },
    { make: "Mitsubishi", model: "Galant", fromYear: 1969, toYear: "present" },
    { make: "Mitsubishi", model: "GTO", fromYear: 1991, toYear: 1999 },
    { make: "Mitsubishi", model: "L200", fromYear: 1978, toYear: "present" },
    { make: "Mitsubishi", model: "Lancer", fromYear: 1973, toYear: "present" },
    {
      make: "Mitsubishi",
      model: "Outlander P-HEV",
      fromYear: 2013,
      toYear: "present",
    },
    { make: "Mitsubishi", model: "Pajero", fromYear: 1982, toYear: "present" },
    { make: "Morris", model: "Ital", fromYear: 1980, toYear: 1984 },
    { make: "Morris", model: "Marina", fromYear: 1971, toYear: 1980 },
    { make: "Nissan", model: "Leaf", fromYear: 2010, toYear: "present" },
    { make: "Nissan", model: "Maxima", fromYear: 1981, toYear: "present" },
    { make: "Nissan", model: "Micra", fromYear: 1982, toYear: "present" },
    { make: "Nissan", model: "S-Cargo", fromYear: 1989, toYear: 1992 },
    { make: "Nissan", model: "Z-cars", fromYear: 1969, toYear: "present" },
    { make: "Oldsmobile", model: "88", fromYear: 1949, toYear: 1999 },
    { make: "Oldsmobile", model: "Aurora", fromYear: 1995, toYear: 2003 },
    { make: "Oldsmobile", model: "Cutlass", fromYear: 1961, toYear: 1999 },
    { make: "Opel", model: "Ascona", fromYear: 1970, toYear: 1988 },
    { make: "Opel", model: "Astra", fromYear: 1991, toYear: "present" },
    { make: "Opel", model: "Corsa", fromYear: 1982, toYear: "present" },
    { make: "Opel", model: "Vectra", fromYear: 1988, toYear: 2008 },
    { make: "Oreca", model: "07", fromYear: 2017, toYear: "present" },
    { make: "Pagani", model: "Huayra", fromYear: 2012, toYear: "present" },
    { make: "Panoz", model: "Roadster", fromYear: 1992, toYear: 1995 },
    { make: "Peel", model: "P50", fromYear: 1962, toYear: 1965 },
    { make: "Peel", model: "Trident", fromYear: 1965, toYear: 1966 },
    { make: "Peugeot", model: "204", fromYear: 1965, toYear: 1976 },
    { make: "Peugeot", model: "205", fromYear: 1983, toYear: 1998 },
    { make: "Peugeot", model: "206", fromYear: 1998, toYear: "present" },
    { make: "Peugeot", model: "406 coupé", fromYear: 1997, toYear: 2004 },
    { make: "Peugeot", model: "504", fromYear: 1968, toYear: 2006 },
    { make: "Plymouth", model: "Fury", fromYear: 1959, toYear: 1978 },
    { make: "Plymouth", model: "Voyager", fromYear: 1974, toYear: 2000 },
    { make: "Pontiac", model: "Astre", fromYear: 1975, toYear: 1977 },
    { make: "Pontiac", model: "Aztek", fromYear: 2000, toYear: 2007 },
    { make: "Pontiac", model: "Bonneville", fromYear: 1958, toYear: 2005 },
    { make: "Pontiac", model: "Firebird", fromYear: 1967, toYear: 2002 },
    { make: "Pontiac", model: "Grand Am", fromYear: 1973, toYear: 1975 },
    { make: "Porsche", model: "550", fromYear: 1953, toYear: 1956 },
    { make: "Porsche", model: "904", fromYear: 1964, toYear: 1965 },
    { make: "Porsche", model: "906", fromYear: 1966, toYear: 1967 },
    { make: "Porsche", model: "908", fromYear: 1968, toYear: 1971 },
    { make: "Porsche", model: "911", fromYear: 1963, toYear: "present" },
    { make: "Porsche", model: "914", fromYear: 1969, toYear: 1976 },
    { make: "Porsche", model: "917", fromYear: 1969, toYear: 1973 },
    { make: "Porsche", model: "918", fromYear: 2013, toYear: 2015 },
    { make: "Porsche", model: "924", fromYear: 1976, toYear: 1988 },
    { make: "Porsche", model: "928", fromYear: 1978, toYear: 1995 },
    { make: "Porsche", model: "944", fromYear: 1982, toYear: 1991 },
    { make: "Porsche", model: "956", fromYear: 1982, toYear: 1984 },
    { make: "Porsche", model: "959", fromYear: 1987, toYear: 1989 },
    { make: "Porsche", model: "962", fromYear: 1984, toYear: 1992 },
    { make: "Porsche", model: "968", fromYear: 1992, toYear: 1995 },
    { make: "Porsche", model: "Boxster", fromYear: 1996, toYear: "present" },
    { make: "Porsche", model: "Carrera GT", fromYear: 2004, toYear: 2006 },
    { make: "Porsche", model: "Cayenne", fromYear: 2002, toYear: "present" },
    { make: "Porsche", model: "Macan", fromYear: 2014, toYear: "present" },
    { make: "Porsche", model: "Panamera", fromYear: 2009, toYear: "present" },
    { make: "Rambler", model: "Classic", fromYear: 1961, toYear: 1966 },
    { make: "Range", model: "Rover Evoque", fromYear: 2011, toYear: "present" },
    { make: "Renault", model: "4", fromYear: 1961, toYear: 1992 },
    { make: "Renault", model: "5", fromYear: 1972, toYear: 1996 },
    { make: "Renault", model: "Alpine GTA/A610", fromYear: 1986, toYear: 1995 },
    { make: "Renault", model: "Clio", fromYear: 1991, toYear: "present" },
    { make: "Renault", model: "Dauphine", fromYear: 1956, toYear: 1967 },
    { make: "Renault", model: "Sport Spider", fromYear: 1996, toYear: 1999 },
    { make: "Renault", model: "Twingo", fromYear: 1993, toYear: "present" },
    { make: "Renault", model: "Twizy", fromYear: 2012, toYear: "present" },
    { make: "Renault", model: "Zoe", fromYear: 2012, toYear: "present" },
    { make: "Rover", model: "25", fromYear: 1999, toYear: 2005 },
    { make: "Rover", model: "45", fromYear: 1999, toYear: 2005 },
    { make: "Rover", model: "75", fromYear: 1999, toYear: 2005 },
    { make: "Rover", model: "800", fromYear: 1986, toYear: 1999 },
    { make: "Saab", model: "900", fromYear: 1978, toYear: 1993 },
    { make: "Saleen", model: "S7", fromYear: 2000, toYear: 2009 },
    { make: "Saturn", model: "S-Series", fromYear: 1991, toYear: 2002 },
    { make: "SEAT", model: "Ibiza", fromYear: 1984, toYear: "present" },
    { make: "Simca", model: "1000", fromYear: 1961, toYear: 1978 },
    { make: "Simca", model: "1100", fromYear: 1967, toYear: 1985 },
    { make: "Škoda", model: "Octavia", fromYear: 1996, toYear: "present" },
    { make: "Subaru", model: "360", fromYear: 1958, toYear: 1971 },
    { make: "Subaru", model: "Alcyone", fromYear: 1985, toYear: 1996 },
    { make: "Subaru", model: "Legacy", fromYear: 1988, toYear: "present" },
    { make: "Suzuki", model: "Cappuccino", fromYear: 1991, toYear: 1997 },
    { make: "Suzuki", model: "Swift", fromYear: 2004, toYear: "present" },
    { make: "Suzuki", model: "Wagon R", fromYear: 1993, toYear: "present" },
    { make: "Tatuus", model: "FR2000", fromYear: 2000, toYear: 2007 },
    { make: "Tesla", model: "Model 3", fromYear: 2017, toYear: "present" },
    { make: "Tesla", model: "Model S", fromYear: 2012, toYear: "present" },
    { make: "Tesla", model: "Model X", fromYear: 2015, toYear: "present" },
    { make: "Tesla", model: "Roadster", fromYear: 2008, toYear: 2012 },
    { make: "Toyota", model: "2000GT", fromYear: 1967, toYear: 1970 },
    {
      make: "Toyota",
      model: "86/Scion FR-S/Subaru BRZ",
      fromYear: 2012,
      toYear: "present",
    },
    { make: "Toyota", model: "Camry", fromYear: 1983, toYear: "present" },
    { make: "Toyota", model: "Celica", fromYear: 1971, toYear: 2006 },
    { make: "Toyota", model: "Corolla", fromYear: 1966, toYear: "present" },
    { make: "Toyota", model: "Curren", fromYear: 1994, toYear: 1998 },
    { make: "Toyota", model: "Hilux", fromYear: 1968, toYear: "present" },
    { make: "Toyota", model: "Ipsum", fromYear: 1995, toYear: 2009 },
    { make: "Toyota", model: "Land Cruiser", fromYear: 1951, toYear: "present" },
    { make: "Toyota", model: "Mirai", fromYear: 2015, toYear: "present" },
    { make: "Toyota", model: "Prius", fromYear: 1997, toYear: "present" },
    { make: "Toyota", model: "RAV4", fromYear: 1994, toYear: "present" },
    { make: "Toyota", model: "Soarer/Lexus SC", fromYear: 1991, toYear: 1997 },
    { make: "Toyota", model: "Sports 800", fromYear: 1965, toYear: 1969 },
    { make: "Toyota", model: "Stout/Toyopet RK", fromYear: 1954, toYear: 1989 },
    { make: "Toyota", model: "Supra", fromYear: 1986, toYear: 2002 },
    { make: "Vauxhall", model: "Viva", fromYear: 1963, toYear: 1979 },
    { make: "Volkswagen", model: "Beetle", fromYear: 1938, toYear: 2003 },
    { make: "Volkswagen", model: "Gol", fromYear: 1980, toYear: "present" },
    { make: "Volkswagen", model: "Golf", fromYear: 1974, toYear: "present" },
    { make: "Volkswagen", model: "Jetta", fromYear: 1980, toYear: "present" },
    { make: "Volkswagen", model: "Passat", fromYear: 1973, toYear: "present" },
    { make: "Volvo", model: "140", fromYear: 1966, toYear: 1974 },
    { make: "Volvo", model: "164", fromYear: 1968, toYear: 1975 },
    { make: "Volvo", model: "850", fromYear: 1991, toYear: 1996 },
    { make: "Volvo", model: "Amazon", fromYear: 1956, toYear: 1970 },
    { make: "Volvo", model: "P1800", fromYear: 1961, toYear: 1973 },
    { make: "Volvo", model: "PV444/544", fromYear: 1944, toYear: 1965 },
    { make: "Volvo", model: "S40/V40", fromYear: 1995, toYear: 2004 },
    { make: "Volvo", model: "V70/XC70", fromYear: 1996, toYear: 2016 },
  ];
  
  function generateNumberInRange(min, max) {
    max -= min;
    return Math.floor(Math.random() * max) + min;
  }
  
  function generateColour() {
    const colorsData = [
      "White",
      "Silver",
      "Black",
      "Grey",
      "Blue",
      "Red",
      "Brown",
      "Green",
    ];
    const maxColour = colorsData.length - 1;
    return colorsData[generateNumberInRange(0, maxColour)];
  }
  
  function generateMileage(fromYear, toYear) {
    const averageMillagePerYear = generateNumberInRange(2000, 10000);
    return (toYear - fromYear) * averageMillagePerYear;
  }
  
  function pickRandomCar() {
    const maxCar = carsData.length - 1;
    return carsData[generateNumberInRange(0, maxCar)];
  }
  
  function generateRandomProductionYear(fromYear, to) {
    return generateNumberInRange(fromYear, to);
  }
  
  function roundToHundred(value) {
    return Math.round(value / 100) * 100;
  }
  
  function generateRandomPrice() {
    return roundToHundred(generateNumberInRange(1000, 100000));
  }
  
  function generateCars(n) {
    const cars = [];
    for (let i = 0; i < n; i++) {
      const pickedCar = pickRandomCar();
      const currentDate = new Date();
      if (pickedCar.toYear == "present")
        pickedCar.toYear = currentDate.getFullYear();
      const car = {
        make: pickedCar.make,
        model: pickedCar.model,
        year: generateRandomProductionYear(pickedCar.fromYear, pickedCar.toYear),
        colour: generateColour(),
        mileage: generateMileage(pickedCar.fromYear, pickedCar.toYear),
        price: generateRandomPrice(),
      };
       cars.push(car);
    }
    return cars
  }
  