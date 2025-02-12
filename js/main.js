function copyToClipboard(id) {
    const textarea = document.getElementById(id);
    textarea.select();
    textarea.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Copied to clipboard!',
        showConfirmButton: false,
        timer: 2000
    });
  }