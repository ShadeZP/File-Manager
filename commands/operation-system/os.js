import  os from 'os';

function osService(command) {
  switch(command) {
    case osCommands.endOfLife:
      return JSON.stringify(os.EOL);
    case osCommands.cpusInfo:
      const cpus = os.cpus().map(({ model, speed }) => ({
        model: model.trim(),
        speed: `${speed / 1000} GHz`,
      }))
      return JSON.stringify(
        {
          overallAmount: cpus.length,
          cpus,
        },
        null,
        2,
      )
    case osCommands.getHomedir:
      return os.homedir();
    case osCommands.getUserName:
      return os.userInfo().username;
    case osCommands.cpuArchitecture:
      return process.arch;
    default:
      return 'Invalid input'
  }
};

const osCommands = {
  endOfLife: '--EOL',
  cpusInfo: '--cpus',
  getHomedir: '--homedir',
  getUserName: '--username',
  cpuArchitecture: '--architecture',
}

export { osService };