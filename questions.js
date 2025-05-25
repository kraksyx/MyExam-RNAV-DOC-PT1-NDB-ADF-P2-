const questions = [
  {
    "question": "What is the approved frequency band assigned to aeronautical NDBs?",
    "options": [
      "190-1750 Hz",
      "190-1750 KHz",
      "190-1750 MHz",
      "190-1750 GHz"
    ],
    "correct": 1
  },
  {
    "question": "In accordance with Doc 8168, a pilot flying an NDB approach must achieve a tracking accuracy within ____ of the published approach track.",
    "options": [
      "+/- 10\u00b0",
      "+/- 5\u00b0",
      "+/- 2.5\u00b0",
      "+/- 2\u00b0"
    ],
    "correct": 0
  },
  {
    "question": "What actually happens in the ADF receiver when the BFO position is selected?",
    "options": [
      "The BFO circuit is activated, and the receiver accepts only A1A modulated signals",
      "The BFO circuit oscillates at an increased frequency in order to allow identification of A2A NDBs",
      "The BFO circuit is de-activated",
      "The BFO circuit imposes a tone onto the carrier wave to make the NDB\u2019s ident audible"
    ],
    "correct": 3
  },
  {
    "question": "The nominal maximum range of an NDB with a transmitter power is 200 watts is:",
    "options": [
      "40 to 45 NM",
      "100 to 120 NM",
      "150 to 170 NM",
      "200 to 220 NM"
    ],
    "correct": 0
  },
  {
    "question": "The ICAO allocated band of frequencies for NDB is:",
    "options": [
      "255 \u2013 455 KHz",
      "200 \u2013 1750 KHz",
      "255 \u2013 1750 KHz",
      "200 \u2013 455 KHz"
    ],
    "correct": 1
  },
  {
    "question": "Using an ADF loop aerial the maximum signal will be received when:",
    "options": [
      "The loop is in line with the NDB aerial",
      "The loop is at 90\u00b0 to the NDB aerial",
      "Within the promulgated range",
      "During daytime only"
    ],
    "correct": 0
  },
  {
    "question": "What action must be taken to receive a bearing from an ADF:",
    "options": [
      "BFO on",
      "Select the loop position",
      "Both the loop and sense aerials must receive the signal",
      "Select the ANT position"
    ],
    "correct": 2
  },
  {
    "question": "Which of the following is the most significant error in ADF:",
    "options": [
      "Quadrantal error",
      "Coastal refraction",
      "Precipitation static",
      "Static from Cb"
    ],
    "correct": 3
  },
  {
    "question": "When using ADF: (i) the accuracy is (ii) than (iii), because the surface wave is (iv):",
    "options": [
      "(i) by day; (ii) greater; (iii) by night; (iv) not present",
      "(i) by night; (ii) greater; (iii) by day; (iv) not present",
      "(i) by night; (ii) less; (iii) by day; (iv) contaminated by sky waves",
      "(i) by day; (ii) less; (iii) by night; (iv) contaminated by sky waves"
    ],
    "correct": 2
  },
  {
    "question": "Snow will affect ADF by:",
    "options": [
      "Decreasing the range",
      "Decreasing the accuracy",
      "Having no effect",
      "Decreasing the range and accuracy"
    ],
    "correct": 2
  },
  {
    "question": "Do all ADF systems have a sense aerial:",
    "options": [
      "Always",
      "Only when a rotating loop system is being used",
      "Never",
      "Only when a fixed loop system is being used"
    ],
    "correct": 0
  },
  {
    "question": "If an NDB signal is received at a range of 1000 nm:",
    "options": [
      "The signal is a surface wave and is quite usable",
      "It will be a ground wave and will be inaccurate",
      "It is a space wave and will be inaccurate",
      "It is a sky wave and is inaccurate"
    ],
    "correct": 3
  },
  {
    "question": "The maximum errors when using ADF will occur in which of the following situations: (i) Position of the NDB (ii) Angle of cut at the coast",
    "options": [
      "(i) On the coast; (ii) 90\u00b0",
      "(i) Well inland; (ii) 90\u00b0",
      "(i) On the coast; (ii) 15\u00b0",
      "(i) Well inland; (ii) 20\u00b0"
    ],
    "correct": 3
  },
  {
    "question": "NDB operate in the:",
    "options": [
      "VLF and LF bands",
      "LF and MF bands",
      "VLF, LF and MF bands",
      "VLF and MF bands"
    ],
    "correct": 1
  },
  {
    "question": "When considering the use of NDB, night effect has its greatest effect during:",
    "options": [
      "Autumn and winter",
      "When using inland beacons",
      "When using a horizontally polarised signal",
      "At dawn and dusk"
    ],
    "correct": 3
  },
  {
    "question": "An aircraft over the sea will experience (i) coastal refraction effect when the radio waves cross the coastline at (ii) and the NDB is (iii):",
    "options": [
      "(i) More; (ii) 90\u00b0; (iii) Near the coast",
      "(i) Less; (ii) 45\u00b0; (iii) Well inland",
      "(i) Less; (ii) 90\u00b0; (iii) Near the coast",
      "(i) More; (ii) 45\u00b0; (iii) On the coast"
    ],
    "correct": 2
  },
  {
    "question": "When converting VOR and ADF bearings to true, the variation at the (i) should be used for VOR and at the (ii) for ADF:",
    "options": [
      "(i) Aircraft; (ii) aircraft",
      "(i) Aircraft; (ii) station",
      "(i) Station; (ii) aircraft",
      "(i) Station; (ii) station"
    ],
    "correct": 2
  },
  {
    "question": "Two NDBs, one 20 nm from the coast and the other 50 nm further inland. Assuming Coastal Refraction is the same for each, from which NDB will an aircraft flying over the sea receive the greatest error?",
    "options": [
      "The NDB at 20 nm",
      "The NDB at 50 nm",
      "Same when the relative bearing is 090/270",
      "Same when the relative bearing is 180/360"
    ],
    "correct": 1
  },
  {
    "question": "What antennae must be used to obtain an ADF bearing?",
    "options": [
      "Loop",
      "Sense",
      "Loop and sense",
      "Radome"
    ],
    "correct": 2
  },
  {
    "question": "RMI rose is mechanically stuck on 090 degrees. The ADF pointer indicates 225 degrees. What is the relative bearing to the beacon?",
    "options": [
      "225 degrees",
      "135 degrees",
      "Cannot be determined",
      "000 degrees"
    ],
    "correct": 1
  },
  {
    "question": "NDBs transmit mainly in the:",
    "options": [
      "VHF band",
      "UHF band",
      "HF band",
      "MF band"
    ],
    "correct": 3
  },
  {
    "question": "When receiving an NDB signal on an ADF receiver the BFO can be selected OFF for the:",
    "options": [
      "Tone signal on NONA1A",
      "Ident signal on NONA1A",
      "Tone signal on NONA2A",
      "Ident signal on NONA2A"
    ],
    "correct": 3
  },
  {
    "question": "The frequency band chosen for NDB\u2019s is:",
    "options": [
      "Upper MF and lower LF",
      "VLF",
      "Upper LF and lower MF",
      "LF"
    ],
    "correct": 2
  },
  {
    "question": "In order to obtain an ADF bearing the:",
    "options": [
      "Signal must be received by both the sense and loop aerials",
      "Sense aerial must be tuned separately",
      "Mode selector should be switched to LOOP",
      "BFO switch must be selected to ON"
    ],
    "correct": 0
  },
  {
    "question": "Quadrantal errors associated with aircraft Automatic Direction Finding (ADF) equipment are caused by:",
    "options": [
      "Misalignment of the loop aerial",
      "Signal bending caused by electrical interference from aircraft wing",
      "Signal bending by the aircraft metallic surfaces",
      "Sky wave/ground wave contamination"
    ],
    "correct": 2
  },
  {
    "question": "The BFO:",
    "options": [
      "Creates the audio ident for an NDB",
      "Is used to make the ident from an A2A NDB audible",
      "Is used to make the ident from an A1A NDB audible",
      "Is used to determine the signal strength of an NDB"
    ],
    "correct": 2
  }
];