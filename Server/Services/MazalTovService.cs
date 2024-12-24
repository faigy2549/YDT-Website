using Entities;
using Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services
{
    public class MazalTovService : IMazalTovService
    {
        private readonly IMazalTovRepository _repository;

        public MazalTovService(IMazalTovRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<MazalTov>> GetAllAsync() => await _repository.GetAllAsync();

        public async Task<MazalTov> GetByIdAsync(int id) => await _repository.GetByIdAsync(id);

        public async Task AddAsync(MazalTov mazalTov) => await _repository.AddAsync(mazalTov);

        public async Task UpdateAsync(MazalTov mazalTov) => await _repository.UpdateAsync(mazalTov);

        public async Task DeleteAsync(int id) => await _repository.DeleteAsync(id);
    }

}
