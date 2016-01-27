Param (
	[string]$File,
	[string]$Pattern,
	[string]$FileContents
)

# Import a CSV/Txt of servernames to pull -- later
$Servers = Import-CSV CSV.csv

ForEach ( $Server in $Servers ) {

	# single servername
	$Server.Servername = "SERVERNAME"

	# Pattern to match for a line to remove
	$Pattern = "<setting.*RemoveThisLine(.*)*/>"

	# path for servername
	$Path = "\C`$\Path\For\Windows\"

	# bigbrother edit
	$File = "\\" + $Server.Servername + $Path + "bbwin.cfg"

	# backup path checking
	If ( !( Test-Path $File ) ) {
		$Path = "\D`$\Path\For\Windows\"
		$File = "\\" + $Server.Servername + $Path + "bbwin.cfg"

		# unecessary?
		$PathFound = Test-Path $File
	}
 
	$NewFile = $File + ".bak"

	# make a backup file if it doesn't exist
	If ( !( Test-Path $NewFile ) ) {
		copy-item $File $NewFile 
		write-host "saved backup to $NewFile"
	}

	If ( Test-Path $NewFile ) {

		# get the content of NewFile except Pattern and overwrite File
		Get-Content $NewFile | Where-Object {$_ -notmatch $Pattern} | set-content $File
	}

	else {
		Write-Host ("bbwin config not found on server " + $Server.Servername)
	}
	BREAK
}

