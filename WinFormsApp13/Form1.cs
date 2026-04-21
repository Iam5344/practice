using System.IO;
using System.Threading;
using System.Diagnostics;
namespace WinFormsApp13
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string path = textBox1.Text;
            string ext = textBox2.Text;

            string[] files = Directory.GetFiles(path, "*" + ext, SearchOption.AllDirectories);

            Stopwatch sw1 = Stopwatch.StartNew();
            int countSeq = 0;
            foreach (var file in files)
            {
                FileInfo fi = new FileInfo(file);
                countSeq++;
            }
            sw1.Stop();
            Stopwatch sw2 = Stopwatch.StartNew();
            int countPar = 0;
            Parallel.For(0, files.Length, index =>
            {
                FileInfo fi = new FileInfo(files[index]);
                Interlocked.Add(ref countPar, 1);
            });
            sw2.Stop();

            label3.Text =
                $"Знайдено файлів: {countSeq}\n" +
                $"Послідовно: {sw1.ElapsedMilliseconds} мс\n" +
                $"Паралельно: {sw2.ElapsedMilliseconds} мс";
        }
    }
}
