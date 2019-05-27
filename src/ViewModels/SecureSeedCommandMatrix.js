import CryptocurrencyType from '@/ViewModels/CryptocurrencyType'
import CommandEnvironmentType from '@/ViewModels/CommandEnvironmentType'

function getPowerShellCommand(length, startChar, endChar, startNum, endNum) {
  return `$randomBuffer = [byte[]](1..1); $seed = [char[]](1..${length}); -join($seed | foreach { Do {(new-object Security.Cryptography.RNGCryptoServiceProvider).GetBytes($randomBuffer); $randomChar = [char[]]([char]'${startChar}'..[char]'${endChar}' + [char]'${startNum}'..[char]'${endNum}')[$randomBuffer[0]]} While ($randomChar -eq $null); $randomChar })`
}

const copyToPCText = 'Copy and paste the above text into the "Windows PowerShell" app on your PC.'
const randomBufferDescription = '<code>$randomBuffer = [byte[]](1..1);</code> creates a 1 byte array to be filled with a cryptographically random byte'

function getPowerShellSeedArrayText(length) {
  return `<code>$seed = [char[]](1..${length});</code> creates an array of characters of length ${length}`
}

const powerShellJoinDescription = '<code>-join(...)</code> joins the result of the contents, which is an array of cryptographically random characters, into one string'
const powerShellForEachDescription = '<code>$seed | foreach {...}</code> pipes the characters of <code>$seed</code> to be iterated over in the <code>foreach</code> function'

function getPowerShellCryptoDescription(startChar, endChar, startNum, endNum) {
  return `<code>Do {(new-object Security.Cryptography.RNGCryptoServiceProvider).GetBytes($randomBuffer); $randomChar = [char[]]([char]'${startChar}'..[char]'${endChar}' + [char]'${startNum}'..[char]'${endNum}')[$randomBuffer[0]]} While ($randomChar -eq $null); $randomChar</code> fills <code>$randomBuffer</code> with a cryptographically random byte. If the byte does not fall in the range of acceptable values, get a new cryptographically random byte. The acceptable range of values is the range of characters of ${startChar} to ${endChar} and the number ${startNum} to ${endNum}. Returns the cryptographically random characters to the <code>join</code> command.`
}

function getMacCommand(length, startChar, endChar, startNum, endNum) {
  return `cat /dev/urandom | LC_ALL=C tr -dc '${startChar}-${endChar}${startNum}-${endNum}' | fold -w ${length} | head -n 1`
}

const copyToTerminalText = 'Copy and paste the above text into the "Terminal" app on your Mac.'
const catDevURandomDescription = '<code>cat /dev/urandom |</code> pipes a stream of cryptographically random numbers to the next command'
const lcAllCDescription = '<code>LC_ALL=C</code> sets localization to be of the "C" type, which is simple and well suited for computational usage'

function getMacTRDescription(startChar, endChar, startNum, endNum) {
  return `<code>tr -dc '${startChar}-${endChar}${startNum}-${endNum}' |</code> filters the random numbers to consist of the set of characters "${startChar}" through "${endChar}" and "${startNum}" through "${endNum}". Then this gets piped to the next command.`
}

function getMacFold(length) {
  return `<code>fold -w ${length} |</code> line-wraps the previous input to only ${length} characters. The -w is needed to break up the "word" of input. This gets piped to the next command.`
}

const getMacHeadDescription = '<code>head -n 1</code> writes the first line of the previous input to standard output.'

function getLinuxCommand(length, startChar, endChar, startNum, endNum) {
  return `echo $(cat /dev/urandom | tr -dc ${startChar}-${endChar}${startNum}-${endNum} | head -c${length})`
}

const linuxEchoDescription = '<code>echo $(...)</code> prints the result of the commands in parentheses with a newline at the end'

function getLinuxTRDescription(startChar, endChar, startNum, endNum) {
  return `<code>tr -dc ${startChar}-${endChar}${startNum}-${endNum} |</code> filters the random numbers to consist of the set of characters "${startChar}" through "${endChar}" and "${startNum}" through "${endNum}". Then this gets piped to the next command.`
}

function getLinuxHeadDescription(length) {
  return `<code>head -c${length}</code> writes ${length} characters of the previous input to standard output.`
}

function getNodeJSCommand(length, charset) {
  return `[...Array(${length})].map(() => (function getRandomChar() { return '${charset}'[crypto.randomBytes(1)[0]] || getRandomChar() })()).join('')`
}

function getNodeJSInitialArrayDescription(length) {
  return `<code>[...Array(${length})]</code> creates an array of ${length} elements to be iterated over`
}

const nodeJSMapDescrption = '<code>.map(() => ...)</code> maps each element over the current array to the passed in function'

function getNodeJSRandomCharDescription(charset) {
  return `<code>(function getRandomChar() { return '${charset}'[crypto.randomBytes(1)[0]] || getRandomChar() })()</code> is a recursive function that only returns when it successfully obtains a cryptographically random character. A cryptographically random character is obtained when the result of a cryptographically random byte properly accesses a character in the acceptable character set.`
}

const nodeJSJoinDescription = `<code>.join('')</code> joins the result of the array of cryptographically random characters into a string.`

function getWebJSCommand(length, charset) {
  return `[...Array(${length})].map(() => (function getRandomChar() { return '${charset}'[window.crypto.getRandomValues(new Uint8Array(1))] || getRandomChar() })()).join('')`
}

function getWebJSRandomCharDescription(charset) {
  return `<code>(function getRandomChar() { return '${charset}'[window.crypto.getRandomValues(new Uint8Array(1))] || getRandomChar() })()</code> is a recursive function that only returns when it successfully obtains a cryptographically random character. A cryptographically random character is obtained when the result of a cryptographically random byte properly accesses a character in the acceptable character set.`
}

function getRubyCommand(length, charset) {
  return `require 'securerandom'; (1..${length}).map{'${charset}'[SecureRandom.random_number(${charset.length})]}.join('')`
}

const rubySecureRandomDescription = `<code>require 'securerandom';</code> imports the 'securerandom' library into the current context. This library has the ability to generate cryptographically random numbers.`

function getRubyRangeDescription(length) {
  return `<code>(1..${length})</code> creates a range of numbers of length ${length}`
}

function getRubyRandomCharDescription(charset) {
  return `<code>.map{'${charset}'[SecureRandom.random_number(${charset.length})]}</code> maps the previous range of numbers to an array of cryptographically random characters.`
}

const rubyJoinDescription = `<code>.join('')</code> joins the previous array of cryptographically random characters into a string`

function getPythonCommand(length, charset) {
  return `import secrets; print("".join(secrets.choice("${charset}") for _ in range(${length})))`
}

const pythonSecretsDescription = `<code>import secrets;</code> imports the 'secrets' library into the current context. This library has the ability to generate cryptographically random numbers.`

const pythonPrintDescription = `<code>print(...)</code> prints the contents to the standard output`

function getPythonJoinDescription(length, charset) {
  return `<code>"".join(secrets.choice("${charset}") for _ in range(${length}))</code> generates ${length} cryptographically random characters and joins them into a string.`
}

function generateSeedCommandList(length, startChar, endChar, startNum, endNum, charset) {
  return [
    {
      languageType: CommandEnvironmentType.windows,
      command: getPowerShellCommand(length, startChar, endChar, startNum, endNum),
      explanation: {
        steps: [
          copyToPCText,
          randomBufferDescription,
          getPowerShellSeedArrayText(length),
          powerShellJoinDescription,
          powerShellForEachDescription,
          getPowerShellCryptoDescription(startChar, endChar, startNum, endNum)
        ]
      }
    }, {
      languageType: CommandEnvironmentType.mac,
      command: getMacCommand(length, startChar, endChar, startNum, endNum),
      explanation: {
        steps: [
          copyToTerminalText,
          catDevURandomDescription,
          lcAllCDescription,
          getMacTRDescription(startChar, endChar, startNum, endNum),
          getMacFold(length),
          getMacHeadDescription
        ]
      }
    }, {
      languageType: CommandEnvironmentType.linux,
      command: getLinuxCommand(length, startChar, endChar, startNum, endNum),
      explanation: {
        steps: [
          linuxEchoDescription,
          catDevURandomDescription,
          getLinuxTRDescription(startChar, endChar, startNum, endNum),
          getLinuxHeadDescription(length)
        ]
      }
    }, {
      languageType: CommandEnvironmentType.javascriptNodeJS,
      command: getNodeJSCommand(length, charset),
      explanation: {
        steps: [
          getNodeJSInitialArrayDescription(length),
          nodeJSMapDescrption,
          getNodeJSRandomCharDescription(charset),
          nodeJSJoinDescription
        ]
      }
    }, {
      languageType: CommandEnvironmentType.javascriptWeb,
      command: getWebJSCommand(length, charset),
      explanation: {
        steps: [
          getNodeJSInitialArrayDescription(length),
          nodeJSMapDescrption,
          getWebJSRandomCharDescription(charset),
          nodeJSJoinDescription
        ]
      }
    }, {
      languageType: CommandEnvironmentType.ruby,
      command: getRubyCommand(length, charset),
      explanation: {
        steps: [
          rubySecureRandomDescription,
          getRubyRangeDescription(length),
          getRubyRandomCharDescription(charset),
          rubyJoinDescription
        ]
      }
    }, {
      languageType: CommandEnvironmentType.python,
      command: getPythonCommand(length, charset),
      explanation: {
        steps: [
          pythonSecretsDescription,
          pythonPrintDescription,
          getPythonJoinDescription(length, charset)
        ]
      }
    }
  ]
}

export default [
  {
    cryptocurrencyType: CryptocurrencyType.raiBlocks,
    secureSeedCommandList: generateSeedCommandList(64, 'A', 'F', '0', '9', 'ABCDEF0123456789')
  },
  {
    cryptocurrencyType: CryptocurrencyType.iota,
    secureSeedCommandList: generateSeedCommandList(81, 'A', 'Z', '9', '9', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ9')
  },
  {
    cryptocurrencyType: CryptocurrencyType.ethereum,
    secureSeedCommandList: generateSeedCommandList(64, 'A', 'F', '0', '9', 'ABCDEF0123456789')
  },
  {
    cryptocurrencyType: CryptocurrencyType.bitcoin,
    secureSeedCommandList: generateSeedCommandList(64, 'A', 'F', '0', '9', 'ABCDEF0123456789')
  }
]
