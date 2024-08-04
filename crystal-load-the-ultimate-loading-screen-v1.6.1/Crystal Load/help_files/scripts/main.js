// JavaScript Document

var iFilesNeeded = 0;
		var iFilesTotal = 0;
		var bDownloadingFile = false;
 
		function SetFilesNeeded( iNeeded )
		{
			iFilesNeeded = iNeeded;
			RefreshFileBox();
		}
		function SetFilesTotal( iTotal )
		{
			iFilesTotal = iTotal;
			RefreshFileBox();
		}
		function DownloadingFile( filename )
		{
			if ( bDownloadingFile )
			{
				iFilesNeeded = iFilesNeeded - 1;
				RefreshFileBox();
			}
			document.getElementById( "loadingtext" ).innerHTML = "Now Downloading: " + filename;
			bCanChangeStatus = false;
			setTimeout( "bCanChangeStatus = true;", 1000 );
			bDownloadingFile = true;
		}
		function SetStatusChanged( status )
		{
			if ( bDownloadingFile )
			{
				iFilesNeeded = iFilesNeeded - 1;
				bDownloadingFile = false;
				RefreshFileBox();
			}
			document.getElementById( "loadingtext" ).innerHTML = status;
			bCanChangeStatus = false;
			setTimeout( "bCanChangeStatus = true;", 1000 );
		}
		function RefreshFileBox()
		{
			document.getElementById( "files" ).innerHTML = "<p>" + iFilesNeeded + " Downloads</p>";
			if ( iFilesTotal > 0 )
				document.getElementById( "files" ).style.visibility = 'visible';
			else
				document.getElementById( "files" ).style.visibility = 'hidden';
		}
		RefreshFileBox();

//  var count = 0;
//  function rotate() {
//   var elem2 = document.getElementById('spin');
//    elem2.style.MozTransform = 'scale(0.5) rotate('+count+'deg)';
//    elem2.style.WebkitTransform = 'scale(0.5) rotate('+count+'deg)';
//    if (count==360) { count = 0 }
//    count+=45;
//    window.setTimeout(rotate, 100);
//  }
// window.setTimeout(rotate, 100);