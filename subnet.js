function calculate() {
	var ipAddress = document.getElementById("ipAddress").value;
	var subnetMask = document.getElementById("subnetMask").value;
	var subnet = new Subnet(ipAddress, subnetMask);

	document.getElementById("networkAddress").value = subnet.getNetworkAddress();
	document.getElementById("broadcastAddress").value = subnet.getBroadcastAddress();
	document.getElementById("totalHosts").value = subnet.getTotalHosts();
	
	var ipArray = ipAddress.split(".");
	var binaryIpArray = [];
	for (var i = 0; i < ipArray.length; i++) {
	  var binaryByte = parseInt(ipArray[i]).toString(2).padStart(8, '0');
	  binaryIpArray.push(binaryByte);
	}
	var binaryIpAddress = binaryIpArray.join(".");
	document.getElementById("binaryIpAddress").value = binaryIpAddress;
}

class Subnet {
	constructor(ipAddress, subnetMask) {
		this.ipAddress = ipAddress;
		this.subnetMask = subnetMask;
	}

	getNetworkAddress() {
		var ipOctets = this.ipAddress.split(".");
		var subnetOctets = this.subnetMask.split(".");
		var networkOctets = [];

		for (var i = 0; i < 4; i++) {
			networkOctets.push(ipOctets[i] & subnetOctets[i]);
		}

		return networkOctets.join(".");
	}

	getBroadcastAddress() {
		var ipOctets = this.ipAddress.split(".");
		var subnetOctets = this.subnetMask.split(".");
		var broadcastOctets = [];

		for (var i = 0; i < 4; i++) {
			broadcastOctets.push((ipOctets[i] & subnetOctets[i]) | (~subnetOctets[i] & 255));
		}

		return broadcastOctets.join(".");
	}

	getTotalHosts() {
		var subnetOctets = this.subnetMask.split(".");
		var totalHosts = Math.pow(2, 32 - this.getSubnetBits()) - 2;

		return totalHosts;
	}

	getSubnetBits() {
		var subnetBits = 0;
		var subnetOctets = this.subnetMask.split(".");

		for (var i = 0; i < 4; i++) {
			subnetBits += this.countBits(subnetOctets[i]);
		}

		return subnetBits;
	}

	countBits(octet) {
		var count = 0;

		while (octet > 0) {
			if (octet % 2 == 1) {
				count++;
			}

			octet = Math.floor(octet / 2);
		}

		return count;
	}
}
