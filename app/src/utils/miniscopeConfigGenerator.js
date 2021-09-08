class MiniscopeConfigGenerator {
  static TEMP_DEFAULT_CONFIGURES = {
    dataDirecotry: 'C:/FILL/OUT/THIS/PATH',
    direcotryStructure: [
      'researcherName',
      'experimentName',
      'animalName',
      'customEntry0',
      'date',
      'time'
    ],
    researcherName: 'miniscope user',
    experimentName: 'experiment name',
    animalName: 'ID20XXMMDDZ',
    customEntry0: 'custom variable here',
    recordLengthinSecond: 60,

    devices: {
      miniscopes: {
        matsuokenMiniscope: {
          deviceType: 'Miniscope_V4',
          deviceID: 1,
          showSaturation: true,
          ROI: {
            leftEdge: 0,
            topEdge: 0,
            width: 600,
            height: 600
          },
          compression: 'GREY',
          framesPerFile: 5000,
          windowScale: 0.75,
          windowX: 800,
          windowY: 100,
          gain: 'Low',
          ewl: 0,
          led0: 0,
          frameRate: '10FPS'
        }
      }
    }
  }

  /*
  NOTE: options structure examples:

  options = {
    dataDirectory: '',
    directoryStructure: [],
    researcherName: '',
    experimentName: '',
    animalName: '',
    // customEntry0 をどのように保持するかは要検討
    recordLengthinSecond: 0,
    devices: [
      {
        deviceCategory: 'miniscopes',
        devideName: 'matsuokenMiniscope',
        deviceType: 'Miniscope_V4',
        deviceID: 1,
        compression: 'GREY',
        framePerFile: 5000,
        gain: 'Low',
        ewl: 0,
        led0: 0,
        frameRate: '10FPS'
      }
    ]
  }
  */
  constructor(options) {
    this.options = options
  }

  create() {
    return this._merge_configures()
  }

  _deep_copied_config_template() {
    return JSON.parse(JSON.stringify(TEMP_DEFAULT_CONFIGURES))
  }

  _merge_configures() {
    configures = this._deep_copied_config_template()

    if (this.options.dataDirectory.length) configures.dataDirectory = this.options.dataDirectory
    if (this.options.direcotryStructure.length) configures.direcotryStructure = this.options.direcotryStructure
    if (this.options.researcherName.length) configures.researcherName = this.options.researcherName
    if (this.options.experimentName.length) configures.experimentName = this.options.experimentName
    if (this.options.animalName.length) configures.animalName = this.options.animalName
    if (this.options.recordLengthinSecond.length) configures.recordLengthinSecond = this.options.recordLengthinSecond

    this.options.devices.forEach(deviceOptions => {
      if (deviceOptions.deviceCategory.length) {
        if (deviceOptions.deviceCategory == 'miniscopes' && !'miniscopes' in configures.devices) {
          configures.devices['miniscopes'] = {}
        } else if (deviceOptions.deviceCategory == 'cameras' && !'cameras' in configures.devices) {
          configures.devices['cameras'] = {}
        }
      }

      if (deviceOptions.deviceName.length) {
        configures.devices[deviceOptions.deviceCategory][deviceOptions.deviceName] = {}
      }

      deviceOptionInstance = configures.devices[deviceOptions.deviceCategory][deviceOptions.deviceName]

      if (deviceOptions.deviceType.length) deviceOptionInstance.deviceType = deviceOptions.deviceType
      if (deviceOptions.deviceID.length) deviceOptionInstance.deviceID = deviceOptions.deviceID
      if (deviceOptions.showSaturation.length) deviceOptionInstance.showSaturation = deviceOptions.showSaturation
      if (deviceOptions.compression.length) deviceOptionInstance.compression = deviceOptions.compression
      if (deviceOptions.framesPerFile.length) deviceOptionInstance.framesPerFile = deviceOptions.framesPerFile
      if (deviceOptions.frameRate.length) deviceOptionInstance.framesRate = deviceOptions.frameRate
      if (deviceOptions.gain.length) deviceOptionInstance.gain = deviceOptions.gain
      if (deviceOptions.ewl.length) deviceOptionInstance.ewl = deviceOptions.ewl
      if (deviceOptions.led0.length) deviceOptionInstance.led0 = deviceOptions.led0
    });

    return configures
  }
}
